const express = require('express');
const router = express.Router();

const authController = require('../controller/loginController');
router.get('/login', authController.getLogin);


module.exports = router;
