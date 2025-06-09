/**
 * Timeout middleware module
 * Provides request timeout functionality to prevent resource exhaustion
 * Automatically terminates long-running requests with 408 status
 */

/**
 * Request timeout middleware factory
 * Creates middleware that automatically terminates requests that take longer
 * than the specified timeout to prevent resource exhaustion
 *
 * @param {number} timeoutMs - Timeout in milliseconds
 * @returns {Function} Express middleware function
 * @example
 * app.use(createTimeoutMiddleware(5000)); // 5 second timeout
 */
function createTimeoutMiddleware(timeoutMs) {
  return (req, res, next) => {
    const timeout = setTimeout(() => {
      if (!res.headersSent) {
        res.status(408).json({ error: 'Request timeout' });
      }
    }, timeoutMs);

    res.on('finish', () => {
      clearTimeout(timeout);
    });

    res.on('close', () => {
      clearTimeout(timeout);
    });

    next();
  };
}

module.exports = createTimeoutMiddleware;
