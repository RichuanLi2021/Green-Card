const express = require('express');
const router = express.Router();


const InsomniaClinicalController = require('../controller/InsomniaClinicalController.js');

router.get('/InsomniaClinical', InsomniaClinicalController.getData);


module.exports = router;