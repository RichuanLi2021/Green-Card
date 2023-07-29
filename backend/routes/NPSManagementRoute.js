const express = require('express');
const router = express.Router();


const NPSManagementController = require('../controller/NPSManagementController.js');

router.get('/NPSManagement', NPSManagementController.getData);

module.exports = router;