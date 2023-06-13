const express = require('express');
const router = express.Router();


const InsomniaSedativesGuideController = require('../controller/InsomniaSedativesGuideController.js');

router.get('/InsomniaSedatives', InsomniaSedativesGuideController.getData);


module.exports = router;