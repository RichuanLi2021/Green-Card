const express = require('express');
const router = express.Router();
const polypharmacyCommonController = require('../../controller/PolypharmacyCommonController.js');

router.route('/polypharmacy-common')
    .get(polypharmacyCommonController.getData)
    .post(polypharmacyCommonController.addData);

router.route('/polypharmacy-common/:Description')
    .put(polypharmacyCommonController.updateData)
    .delete(polypharmacyCommonController.deleteData);

module.exports = router;
