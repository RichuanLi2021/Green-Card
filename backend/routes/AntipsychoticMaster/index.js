const express = require('express');
const router = express.Router();

const antipsychoticSafetyRoute = require('./AntipsychoticSafetyRoute');
const antipsychoticsGuideRoute = require('./antipsychoticsGuideRoute');

router.use('/safety', antipsychoticSafetyRoute);
router.use('/guide', antipsychoticsGuideRoute);

module.exports = router;
