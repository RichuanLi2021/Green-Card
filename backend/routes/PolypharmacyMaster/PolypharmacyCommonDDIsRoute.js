const express = require('express');
const router = express.Router();
const PolypharmacyCommonController = require('../../controller/PolypharmacyCommonDDIsController.js');

router.route('/polypharmacy-common-ddis')
    .get(PolypharmacyCommonController.getData);

module.exports = router;
