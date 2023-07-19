const express = require('express');
const router = express.Router();


const neuropsychiatricController = require('../controller/neuropsychiatricController.js');

router.get('/Neuropsychiatric', neuropsychiatricController.getData);

module.exports = router;