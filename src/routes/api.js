/**
 * API routes module
 * Defines HTTP endpoints for the web application
 * Provides main application info and health check endpoints
 */

const express = require('express');
const config = require('../config/environment');

const router = express.Router();

/**
 * Main application endpoint
 * @route GET /
 * @returns {Object} 200 - Application information
 */
router.get('/', (req, res) => {
  res.json({
    message: 'Hello, Docker!',
    environment: config.NODE_ENV,
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

/**
 * Health check endpoint for container orchestration
 * @route GET /health
 * @returns {Object} 200 - Health status
 */
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.NODE_ENV,
  });
});

module.exports = router;
