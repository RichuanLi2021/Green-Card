const express = require('express');
const router = express.Router();


const MoodStabilizersController = require('../controller/MoodStabilizersController.js');

router.get('/MoodStabilizers', MoodStabilizersController.getData);


module.exports = router;