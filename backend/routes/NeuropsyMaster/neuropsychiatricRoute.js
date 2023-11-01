const express = require('express');
const router = express.Router();
const neuropsychiatricController = require('../../controller/neuropsychiatricController.js');

router.route('/neuropsychiatric')
    .get(neuropsychiatricController.getData)
    .post(neuropsychiatricController.drugData);

router.route('/neuropsychiatric/:Medication')
    .put(neuropsychiatricController.updateData)
    .delete(neuropsychiatricController.drugDelete);

module.exports = router;
