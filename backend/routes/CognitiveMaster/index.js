const express = require('express');
const router = express.Router();

const ClinicalRoute = require('./CognitiveEnhancersClinicalRoute.js');
const GuideContRoute = require('./CognitiveEnhancersGuideContRoute.js');
const GuideRoute = require('./CognitiveEnhancersGuideRoute.js');

router.use('/clinical', ClinicalRoute);
router.use('/guide-cont', GuideContRoute);
router.use('/guide', GuideRoute);

module.exports = router;
