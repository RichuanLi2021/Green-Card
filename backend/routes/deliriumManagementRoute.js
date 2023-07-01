const express = require("express");
const router = express.Router();

const deliriumManagementController = require("../controller/deliriumManagementController");

router.get("/DeliriumManagement", deliriumManagementController.getData);

module.exports = router;
