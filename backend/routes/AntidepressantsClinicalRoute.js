const express = require('express');
const router = express.Router();


const antidepressantsClinicalController = require('../controller/AntidepressantsClinicalController.js');

router.get('/AntidepressantsClinical', antidepressantsClinicalController.getData);

module.exports = router;