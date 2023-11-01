const express = require('express');
const router = express.Router();

// Import the individual route files
const PolypharmacyCommonDDIsRoute = require('./PolypharmacyCommonDDIsRoute.js');
const PolypharmacyCommonRoute = require('./PolypharmacyCommonRoute.js');
const PolypharmacyNotableRoute = require('./PolypharmacyNotableRoute.js');
const PolypharmacyPrinciplesRoute = require('./PolypharmacyPrinciplesRoute.js');
const PolypharmacyRouteNotable = require('./PolypharmacyRouteNotable.js');
const PrinciplesPolypharmacyRoute = require('./PrinciplesPolypharmacyRoute');

// Use the imported routes when the specific path is accessed
router.use('/', PolypharmacyCommonDDIsRoute);
router.use('/', PolypharmacyCommonRoute);
router.use('/', PolypharmacyNotableRoute);
router.use('/', PolypharmacyPrinciplesRoute);
router.use('/', PolypharmacyRouteNotable);
router.use('/', PrinciplesPolypharmacyRoute);

module.exports = router;
