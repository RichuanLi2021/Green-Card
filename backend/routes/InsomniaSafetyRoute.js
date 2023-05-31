const express = require('express');
const router = express.Router();


const InsomniaSafetyController = require('../controller/InsomniaSafetyController.js');

router.get('/InsomniaSafety', InsomniaSafetyController.getData);


module.exports = router;