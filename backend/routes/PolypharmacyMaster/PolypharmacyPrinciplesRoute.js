const express = require('express');
const router = express.Router();
const PolypharmacyPrinciplesController = require('../../controller/PolypharmacyPrinciplesController.js');

router.route('/polypharmacy-principles')
    .get(PolypharmacyPrinciplesController.getData);

module.exports = router;
