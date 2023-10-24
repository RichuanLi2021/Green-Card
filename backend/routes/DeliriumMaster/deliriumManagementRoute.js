const express = require('express');
const router = express.Router();
const deliriumManagementController = require('../../controller/deliriumManagementController');

router.route('/')
    .get(deliriumManagementController.getData);

module.exports = router;
