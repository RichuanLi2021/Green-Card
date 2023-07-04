const express = require('express');
const router = express.Router();


 const SearchResultsController = require('../controller/SearchResultsController.js');

 router.get('/SearchResults', SearchResultsController.getData);



module.exports = router;