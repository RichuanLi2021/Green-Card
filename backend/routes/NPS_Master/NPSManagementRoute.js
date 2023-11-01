const express = require('express');
const router = express.Router();
const NPSManagementController = require('../../controller/NPSManagementController.js');

router.route('/nps-management')
    .get(NPSManagementController.getData);

module.exports = router;
