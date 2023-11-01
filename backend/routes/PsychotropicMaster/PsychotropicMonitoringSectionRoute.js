const express = require('express');
const router = express.Router();
const PsychotropicMonitoringSectionController = require('../../controller/PsychotropicMonitoringSectionController.js');

router.route('/psychotropic-monitoring-section')
    .get(PsychotropicMonitoringSectionController.getData)
    .post(PsychotropicMonitoringSectionController.drugData);

router.route('/psychotropic-monitoring-section/:Name')
    .put(PsychotropicMonitoringSectionController.updatePsychotropicMonitoringSectionData)
    .delete(PsychotropicMonitoringSectionController.drugDelete);

module.exports = router;
