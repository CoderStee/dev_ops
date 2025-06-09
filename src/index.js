/**
 * Main application entry point
 * Configures Express.js web server with security middleware,
 * request logging, timeout handling, and graceful shutdown
 */
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const config = require('./config/environment');
const apiRoutes = require('./routes/api');
const createTimeoutMiddleware = require('./middleware/timeout');

// Constants
const REQUEST_TIMEOUT_MS = 5000;
const SHUTDOWN_TIMEOUT_MS = 10000;
const REQUEST_SIZE_LIMIT = '1mb';
const MB_DIVISOR = 1024 * 1024;

const app = express();

// Validate environment before starting
try {
  config.validateEnvironment();
} catch (error) {
  console.error('Environment validation failed:', error.message);
  process.exit(1);
}

// Set process title for monitoring
process.title = `simple-webapp-${config.NODE_ENV}`;

// Log startup information
console.log(`🚀 Starting ${process.title}`);
console.log(`📝 PID: ${process.pid}`);
console.log(
  `💾 Memory: ${Math.round(process.memoryUsage().heapUsed / MB_DIVISOR)}MB`,
);
console.log(`🌍 Environment: ${config.NODE_ENV}`);
console.log(`🚪 Port: ${config.PORT}`);

// Security middleware
app.use(helmet());

// Logging middleware
app.use(morgan(config.isProduction ? 'combined' : 'dev'));

// Body parsing middleware with limits
app.use(express.json({ limit: REQUEST_SIZE_LIMIT }));

// Request timeout middleware
app.use(createTimeoutMiddleware(REQUEST_TIMEOUT_MS));

// Routes
app.use('/', apiRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
  });
});

// JSON parsing error handler
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      error: 'Invalid JSON format',
      timestamp: new Date().toISOString(),
    });
  }
  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      error: 'Request too large',
      timestamp: new Date().toISOString(),
    });
  }
  next(err);
});

// Global error handler
app.use((err, req, res, _next) => {
  console.error('Error:', err.message);
  // Truncate stack trace to prevent memory issues with large errors
  const stackTrace = err.stack
    ? err.stack.substring(0, 1000)
    : 'No stack trace';
  console.error('Stack:', stackTrace);

  const statusCode = err.statusCode || 500;
  const message = config.isProduction ? 'Internal server error' : err.message;

  res.status(statusCode).json({
    error: message,
    timestamp: new Date().toISOString(),
  });
});

// Start server
const server = app.listen(config.PORT, () => {
  console.log(
    `Server running in ${config.NODE_ENV} mode on port ${config.PORT}`,
  );
});

// Handle server startup errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${config.PORT} is already in use`);
    process.exit(1);
  } else if (err.code === 'EACCES') {
    console.error(`Permission denied: cannot bind to port ${config.PORT}`);
    process.exit(1);
  } else {
    console.error('Server startup error:', err.message);
    process.exit(1);
  }
});

let isShuttingDown = false;

/**
 * Handles graceful shutdown of the server
 * @param {string} signal - The signal received (SIGTERM, SIGINT)
 */
const gracefulShutdown = (signal) => {
  if (isShuttingDown) {
    console.log(`${signal} received, but shutdown already in progress`);
    return;
  }
  isShuttingDown = true;

  console.log(`${signal} received, shutting down gracefully`);

  // Stop accepting new connections
  server.close((err) => {
    if (err) {
      console.error('Error closing HTTP server:', err.message);
      process.exit(1);
    }
    console.log('HTTP server closed');
    process.exit(0);
  });

  // Force shutdown after timeout
  setTimeout(() => {
    console.error(
      'Could not close connections in time, forcefully shutting down',
    );
    process.exit(1);
  }, SHUTDOWN_TIMEOUT_MS);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
