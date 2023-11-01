const express = require('express');
const router = express.Router();

// Importing the individual route file
const feedbackRoute = require('./feedbackRoute');

// Use the imported route when the path is accessed
router.use('/', feedbackRoute);

module.exports = router;
