const express = require('express');
const router = express.Router();


const polypharmacyCommonController = require('../controller/PolypharmacyCommonController.js');


router.get('/PolypharmacyCommon', polypharmacyCommonController.getData);
router.post("/PolypharmacyCommon/update", polypharmacyCommonController.updateData);


module.exports = router;