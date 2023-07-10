const express = require('express');
const router = express.Router();


const InsomniaSedativesGuideController = require('../controller/InsomniaSedativesGuideController.js');

router.get('/InsomniaSedatives', InsomniaSedativesGuideController.getData);
router.post('/InsomniaSedatives/update', InsomniaSedativesGuideController.updateData);
router.post('/add/InsomniaSedatives', InsomniaSedativesGuideController.drugData);

module.exports = router;