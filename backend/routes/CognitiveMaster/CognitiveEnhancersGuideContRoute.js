const express = require('express');
const router = express.Router();
const controller = require('../../controller/CognitiveEnhancersGuideContController.js');

router.route('/')
    .get(controller.getData);

router.route('/update')
    .post(controller.updateData);

module.exports = router;
