const express = require('express');
const router = express.Router();

const antidepressantSafetyController = require('../controller/AntidepressantSafetyController.js');

router.get('/AntidepressantSafety', antidepressantSafetyController.getData);
router.post("/AntidepressantSafety/update", antidepressantSafetyController.updateData);

module.exports = router;