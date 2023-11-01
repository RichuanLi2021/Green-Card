const express = require('express');
const router = express.Router();
const controller = require("../../controller/antipsychoticsGuideController.js");

router.route('/')
    .get(controller.getData);

router.route('/update')
    .post(controller.updateData);

router.route('/add')
    .post(controller.addData);

router.route('/delete/:Name')
    .delete(controller.deleteData);

module.exports = router;
