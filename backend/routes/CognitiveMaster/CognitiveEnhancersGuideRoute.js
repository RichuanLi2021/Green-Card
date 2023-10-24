const express = require('express');
const router = express.Router();
const controller = require('../../controller/CognitiveEnhancersGuideController.js');

router.route('/')
    .get(controller.getData)
    .post(controller.drugData); // Assuming .post here intends to create/add data

router.route('/update')
    .post(controller.updateData);

router.route('/delete/:Name')
    .delete(controller.drugDelete);

module.exports = router;
