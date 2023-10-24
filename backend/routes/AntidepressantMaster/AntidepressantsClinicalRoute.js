const express = require('express');
const router = express.Router();
const controller = require('../../controller/AntidepressantsClinicalController.js');

router.route('/')
    .get(controller.getData)
    .post(controller.addData);

router.route('/update')
    .post(controller.updateData);

router.route('/delete/:Description')
    .delete(controller.deleteData);

module.exports = router;
