var rateLimit = require('express-rate-limit');

// Create the rate limiter instance at initialization
var limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 1, // Limit each user to 1 request per windowMs
  keyGenerator: (req) => req.headers.user,
  message: 'Too many requests from this user, please try again later.',
});

var rateLimiter = (req, res, next) => {
  // Check if 'User' header is present
  if (!req.headers.user) {
    return res.status(400).json({ error: 'User header is required for requests to /api/pokemons' });
  }

  // Apply rate limiting per user
  limiter(req, res, next);
};

module.exports = rateLimiter;
