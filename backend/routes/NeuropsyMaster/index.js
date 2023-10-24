const express = require('express');
const router = express.Router();

// Import the neuropsychiatric routes
const neuropsychiatricRoute = require('./neuropsychiatricRoute');

// Use the neuropsychiatric routes when the / path is accessed
router.use('/', neuropsychiatricRoute);

module.exports = router;