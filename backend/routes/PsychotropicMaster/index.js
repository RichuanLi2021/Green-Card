const express = require('express');
const router = express.Router();

// Importing the individual route file
const PsychotropicMonitoringSectionRoute = require('./PsychotropicMonitoringSectionRoute');

// Use the imported route when the path is accessed
router.use('/', PsychotropicMonitoringSectionRoute);

module.exports = router;
