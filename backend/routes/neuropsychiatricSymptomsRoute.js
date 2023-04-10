const express = require('express');
const router = express.Router();


const neuropsychiatricSymptomsController = require('../controller/neuropsychiatricSymptomsController.js');

router.get('/neuropsychiatricSymptoms', neuropsychiatricSymptomsController.getData);


module.exports = router
