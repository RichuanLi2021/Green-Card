const express = require('express');
const router = express.Router();


const PsychotropicMonitoringSectionController = require('../controller/PsychotropicMonitoringSectionController.js');

router.get('/PsychotropicMonitoringSection', PsychotropicMonitoringSectionController.PsychotropicMonitoringSectionController.getData);
router.post("/PsychotropicMonitoringSection/update", PsychotropicMonitoringSectionController.updatePsychotropicMonitoringSectionData);
router.delete("/psychotropic/delete:Name",PsychotropicMonitoringSectionController.drugDelete);

module.exports = router;