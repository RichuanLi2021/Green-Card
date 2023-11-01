const express = require('express');
const router = express.Router();

// Importing individual route files
const SearchResultsRoute = require('./SearchResultsRoute');
const SearchRoute = require('./searchRoute');

// Use the imported routes
router.use('/', SearchResultsRoute);
router.use('/', SearchRoute);

module.exports = router;
