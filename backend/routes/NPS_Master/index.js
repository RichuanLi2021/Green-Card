const express = require('express');
const router = express.Router();

// Import the NPSManagement routes
const NPSManagementRoute = require('./NPSManagementRoute');

// Use the NPSManagement routes when the / path is accessed
router.use('/', NPSManagementRoute);

module.exports = router;
