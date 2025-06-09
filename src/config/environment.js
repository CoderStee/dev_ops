/**
 * Environment configuration module
 * Handles validation and parsing of environment variables
 * Provides typed configuration objects for the application
 */

const requiredEnvVars = ['NODE_ENV'];

/**
 * Validates that required environment variables are present
 * @throws {Error} If any required environment variables missing
 */
function validateEnvironment() {
  const missing = requiredEnvVars.filter((env) => !process.env[env]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`,
    );
  }
}

/**
 * Validates and parses the PORT environment variable
 * @returns {number} Valid port number between 1-65535
 * @throws {Error} If PORT is invalid or out of range
 */
function getPort() {
  const port = parseInt(process.env.PORT, 10) || 3000;
  if (isNaN(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid PORT value: ${process.env.PORT}`);
  }
  return port;
}

module.exports = {
  validateEnvironment,
  PORT: getPort(),
  NODE_ENV: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
};
