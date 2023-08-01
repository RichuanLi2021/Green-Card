const express = require('express');
const router = express.Router();


const polypharmacyCommonController = require('../controller/PolypharmacyCommonController.js');


router.get('/PolypharmacyCommon', polypharmacyCommonController.getData);
router.post("/PolypharmacyCommon/update", polypharmacyCommonController.updateData);
router.post('/add/PolypharmacyCommon', polypharmacyCommonController.addData);
router.delete('/PolypharmacyCommon/delete/:Description',polypharmacyCommonController.deleteData);


module.exports = router;