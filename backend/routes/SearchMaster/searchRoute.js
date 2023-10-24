const express = require("express");
const router = express.Router();
const searchController = require("../../controller/searchController");

router.route('/search')
    .get(searchController.search);

module.exports = router;
