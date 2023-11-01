const express = require('express');
const router = express.Router();

// Import the login routes
const loginRoute = require('./loginRoute.js');

// Use the auth routes when the login endpoint is hit
router.use('/', loginRoute);

module.exports = router;
