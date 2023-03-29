const express = require('express');
const router = express.Router();

const apController = require('../controller/cogEnhancersGuideController.js');

router.get('/cognitiveEnhancersGuide', cogEController.cognitiveEnhancersData);

module.exports = router