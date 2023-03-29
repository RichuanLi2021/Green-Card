const express = require('express');
const router = express.Router();
const apController = require ('../controller/antipsychoticsGuideController');

router.get('/antipsychoticsGuide', apController.getData);
router.post('/antipsychoticsGuide/update', apController.updateData);

module.exports = router
