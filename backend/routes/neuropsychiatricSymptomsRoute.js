const express = require('express');
const router = express.Router();


const neuropsychiatricSymptomsController = require('../controller/neuropsychiatricSymptomsController.js');

router.get('/NeuropsychiatricSymptoms', neuropsychiatricSymptomsController.getData);


module.exports = router