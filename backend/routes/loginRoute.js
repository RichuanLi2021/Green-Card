const express = require('express');
const router = express.Router();

const authController = require('../controller/loginController');
router.get('/login', authController.getLogin);
router.post('/register', authController.postRegister);


module.exports = router;
