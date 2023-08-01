const express = require('express');
const router = express.Router();


const polypharmacyNotableController = require('../controller/PolypharmacyControllerNotable.js');


router.get('/PolypharmacyNotable', polypharmacyNotableController.getData);
router.post("/PolypharmacyNotable/update", polypharmacyNotableController.updateData);
router.post('/add/PolypharmacyNotable', polypharmacyNotableController.addData);
router.delete('/PolypharmacyNotable/delete/:Description',polypharmacyNotableController.deleteData);


module.exports = router;