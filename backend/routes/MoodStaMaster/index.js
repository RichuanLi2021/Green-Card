const express = require('express');
const router = express.Router();

// Import the mood stabilizers routes
const moodStabilizersRoute = require('./MoodStabilizersRoute');

// Use the mood stabilizers routes when the path is accessed
router.use('/', moodStabilizersRoute);

module.exports = router;
