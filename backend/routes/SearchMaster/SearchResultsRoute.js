const express = require('express');
const router = express.Router();
const SearchResultsController = require('../../controller/SearchResultsController.js');

router.route('/search-results')
    .get(SearchResultsController.getData);

module.exports = router;
