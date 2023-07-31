const express = require('express');
const router = express.Router();


const PolypharmacyCommonController = require('../controller/PolypharmacyCommonDDIsController.js');

router.get('/PolypharmacyCommonDDIs', PolypharmacyCommonController.getData);


module.exports = router;