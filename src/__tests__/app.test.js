/**
 * Application test suite
 * Comprehensive tests for API endpoints, middleware functionality,
 * and configuration validation using Jest and Supertest
 */

const request = require('supertest');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const config = require('../config/environment');
const apiRoutes = require('../routes/api');
const createTimeoutMiddleware = require('../middleware/timeout');

// Create test app
function createTestApp() {
  const app = express();

  // Basic middleware
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(express.json({ limit: '1mb' }));

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

  return app;
}

describe('API Routes', () => {
  let app;

  beforeAll(() => {
    app = createTestApp();
  });

  describe('GET /', () => {
    test('should return application info', async () => {
      const response = await request(app).get('/').expect(200);

      expect(response.body).toHaveProperty('message', 'Hello, Docker!');
      expect(response.body).toHaveProperty('environment');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('version', '1.0.0');
    });
  });

  describe('GET /health', () => {
    test('should return health status', async () => {
      const response = await request(app).get('/health').expect(200);

      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('uptime');
      expect(response.body).toHaveProperty('environment');
    });
  });

  describe('GET /nonexistent', () => {
    test('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/nonexistent').expect(404);

      expect(response.body).toHaveProperty('error', 'Route not found');
      expect(response.body).toHaveProperty('path', '/nonexistent');
      expect(response.body).toHaveProperty('timestamp');
    });
  });
});

describe('Middleware', () => {
  describe('Timeout Middleware', () => {
    test('should create timeout middleware function', () => {
      const middleware = createTimeoutMiddleware(1000);
      expect(typeof middleware).toBe('function');
      expect(middleware.length).toBe(3); // req, res, next
    });

    test('should handle timeout correctly', (done) => {
      const app = express();
      app.use(createTimeoutMiddleware(50));
      app.get('/slow', (req, res) => {
        // Intentionally slow response that checks if headers were already sent
        setTimeout(() => {
          if (!res.headersSent) {
            res.json({ message: 'slow response' });
          }
        }, 100);
      });

      request(app)
        .get('/slow')
        .expect(408)
        .expect((res) => {
          expect(res.body.error).toBe('Request timeout');
        })
        .end(done);
    });

    test('should not timeout for fast responses', (done) => {
      const app = express();
      app.use(createTimeoutMiddleware(100));
      app.get('/fast', (req, res) => {
        res.json({ message: 'fast response' });
      });

      request(app)
        .get('/fast')
        .expect(200)
        .expect((res) => {
          expect(res.body.message).toBe('fast response');
        })
        .end(done);
    });
  });
});

describe('Configuration', () => {
  describe('Environment Validation', () => {
    test('should validate environment successfully with NODE_ENV set', () => {
      // This should not throw since NODE_ENV is set in test environment
      expect(() => config.validateEnvironment()).not.toThrow();
    });

    test('should have proper configuration properties', () => {
      expect(config).toHaveProperty('PORT');
      expect(config).toHaveProperty('NODE_ENV');
      expect(config).toHaveProperty('isProduction');
      expect(config).toHaveProperty('isDevelopment');
      expect(typeof config.PORT).toBe('number');
      expect(typeof config.NODE_ENV).toBe('string');
      expect(typeof config.isProduction).toBe('boolean');
      expect(typeof config.isDevelopment).toBe('boolean');
    });

    test('should handle missing NODE_ENV validation', () => {
      // Mock the environment config module to test validation
      const originalEnv = process.env.NODE_ENV;
      delete process.env.NODE_ENV;

      // Re-require the module to test with missing NODE_ENV
      delete require.cache[require.resolve('../config/environment')];
      const testConfig = require('../config/environment');

      expect(() => testConfig.validateEnvironment()).toThrow(
        'Missing required environment variables: NODE_ENV',
      );

      // Restore original environment
      process.env.NODE_ENV = originalEnv;
    });
  });
});
