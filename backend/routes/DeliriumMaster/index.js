const express = require('express');
const router = express.Router();

const DeliriumManagementRoute = require('./deliriumManagementRoute.js');
const DeliriumRoute = require('./deliriumRoute.js');

router.use('/management', DeliriumManagementRoute);
router.use('/delirium', DeliriumRoute);

module.exports = router;
