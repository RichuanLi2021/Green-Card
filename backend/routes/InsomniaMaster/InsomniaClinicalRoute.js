const express = require('express');
const router = express.Router();
const InsomniaClinicalController = require('../../controller/InsomniaClinicalController.js');

router.route('/insomnia-clinical')
    .get(InsomniaClinicalController.getData)
    .post(InsomniaClinicalController.drugData);

router.route('/insomnia-clinical/:Description')
    .put(InsomniaClinicalController.updateData)
    .delete(InsomniaClinicalController.drugDelete);

module.exports = router;
