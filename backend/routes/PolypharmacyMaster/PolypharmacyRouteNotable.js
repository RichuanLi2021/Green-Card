const express = require('express');
const router = express.Router();
const polypharmacyNotableController = require('../../controller/PolypharmacyControllerNotable.js');

router.route('/polypharmacy-notable')
    .get(polypharmacyNotableController.getData)
    .post(polypharmacyNotableController.addData);

router.route('/polypharmacy-notable/:Description')
    .put(polypharmacyNotableController.updateData)
    .delete(polypharmacyNotableController.deleteData);

module.exports = router;
