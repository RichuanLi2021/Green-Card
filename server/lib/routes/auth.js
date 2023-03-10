const express = require('express');
const router = express.Router();

const authController = require('..//controller//auth');

router.get('/login', authController.getLogin);

module.exports = router;