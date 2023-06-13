const express = require('express');
const router = express.Router();


const PsychotropicMonitoringSectionController = require('../controller/PsychotropicMonitoringSectionController.js');

router.get('/PsychotropicMonitoringSection', PsychotropicMonitoringSectionController.getData);


module.exports = router