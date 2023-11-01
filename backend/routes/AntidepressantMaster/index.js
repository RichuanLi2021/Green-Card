const express = require('express');
const router = express.Router();

const antidepressantGuideRoute = require('./AntidepressantGuideRoute');
const antidepressantSafetyRoute = require('./AntidepressantSafetyRoute');
const antidepressantsClinicalRoute = require('./AntidepressantsClinicalRoute');

router.use('/guide', antidepressantGuideRoute);
router.use('/safety', antidepressantSafetyRoute);
router.use('/clinical', antidepressantsClinicalRoute);

module.exports = router;
