const express = require('express');
const router = express.Router();


const PsychotropicMonitoringSectionController = require('../controller/PsychotropicMonitoringSectionController.js');

router.get('/PsychotropicMonitoringSection', PsychotropicMonitoringSectionController.PsychotropicMonitoringSectionController.getData);
router.post("/PsychotropicMonitoringSection/update", PsychotropicMonitoringSectionController.updatePsychotropicMonitoringSectionData);


module.exports = router;