const express = require('express');
const router = express.Router();


const cogEController = require('../controller/cogEnhancersGuideController.js');

router.get('/CognitiveEnhancersGuide', cogEController.getData);


module.exports = router
