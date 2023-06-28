const express = require('express');
const router = express.Router();


const PolypharmacyNotableController = require('../controller/PolypharmacyNotableController.js');

router.get('/PolypharmacyNotableChanges', PolypharmacyNotableController.getData);


module.exports = router;