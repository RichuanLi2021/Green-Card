const express = require('express');
const router = express.Router();

const apController = require('../controller/antipsychoticsGuideController.js');

router.get('/antipsychoticsGuide', apController.getData);

module.exports = router