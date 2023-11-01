const express = require('express');
const router = express.Router();
const PolypharmacyNotableController = require('../../controller/PolypharmacyNotableController.js');

router.route('/polypharmacy-notable-changes')
    .get(PolypharmacyNotableController.getData);

module.exports = router;
