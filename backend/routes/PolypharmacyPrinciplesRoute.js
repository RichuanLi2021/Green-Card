const express = require('express');
const router = express.Router();


const PolypharmacyPrinciplesController = require('../controller/PolypharmacyPrinciplesController.js');

router.get('/PolypharmacyPrinciples', PolypharmacyPrinciplesController.getData);


module.exports = router;