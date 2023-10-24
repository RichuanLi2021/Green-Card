const express = require('express');
const router = express.Router();
const controller = require("../../controller/AntipsychoticSafetyController.js");

router.route('/')
    .get(controller.getData);

router.route('/update')
    .post(controller.updateData);

router.route('/add')
    .post(controller.addData);

router.route('/delete/:Description')
    .delete(controller.deleteData);

module.exports = router;
