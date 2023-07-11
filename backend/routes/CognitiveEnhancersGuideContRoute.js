const express = require('express');
const router = express.Router();


const CognitiveEnhancersGuideContController = require('../controller/CognitiveEnhancersGuideContController.js');

router.get('/CognitiveEnhancersGuideCont', CognitiveEnhancersGuideContController.getData);
router.post('/CognitiveEnhancersGuideCont/update', CognitiveEnhancersGuideContController.updateData);


module.exports = router;