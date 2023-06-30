const express = require('express');
const router = express.Router();
const apController = require ('../controller/antipsychoticsGuideController');

router.get('/antipsychoticsGuide', apController.getData);
router.post('/antipsychoticsGuide/update', apController.updateData);
//add another route here for inserting

module.exports = router
