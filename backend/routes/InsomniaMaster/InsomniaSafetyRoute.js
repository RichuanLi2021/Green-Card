const express = require('express');
const router = express.Router();
const InsomniaSafetyController = require('../../controller/InsomniaSafetyController.js');

router.route('/insomnia-safety')
    .get(InsomniaSafetyController.getData)
    .post(InsomniaSafetyController.drugData);

router.route('/insomnia-safety/:Description')
    .delete(InsomniaSafetyController.drugDelete)
    .put(InsomniaSafetyController.updateData);

module.exports = router;
