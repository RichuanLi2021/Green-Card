const { rateLimit: rateLimiter } = require('express-rate-limit')

module.exports = rateLimiter({
  limit: 10, // Number of requests allowed within a duration
  legacyHeaders: false, // False: Disabled `X-RateLimit-*` headers; True: Enabled `X-RateLimit-*` headers
  message: async (req, res) => {
    return res.status(429).json({ message: 'Too many requests!' })
  },
  standardHeaders: 'draft-7', // draft-6: multiple `RateLimit-*` headers; draft-7: single `RateLimit` header
  windowMs: 1000 // Milliseconds
})