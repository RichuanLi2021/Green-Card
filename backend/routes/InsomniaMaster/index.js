const express = require('express');
const router = express.Router();

const InsomniaClinicalRoute = require('./InsomniaClinicalRoute.js');
const InsomniaDeprescribingRoute = require('./insomniaDeprescribingRoute.js');
const InsomniaSafetyRoute = require('./InsomniaSafetyRoute.js');
const InsomniaSedativesGuideRoute = require('./InsomniaSedativesGuideRoute.js');

router.use('/clinical', InsomniaClinicalRoute);
router.use('/deprescribing', InsomniaDeprescribingRoute);
router.use('/safety', InsomniaSafetyRoute);
router.use('/sedatives-guide', InsomniaSedativesGuideRoute);

module.exports = router;
