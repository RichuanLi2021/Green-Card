const express = require('express');
const router = express.Router();


const polypharmacyNotableController = require('../controller/PolypharmacyControllerNotable.js');


router.get('/PolypharmacyNotable', polypharmacyNotableController.getData);
router.post("/PolypharmacyNotable/update", polypharmacyNotableController.updateData);


module.exports = router;