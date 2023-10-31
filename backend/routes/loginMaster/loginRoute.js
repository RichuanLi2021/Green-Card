const express = require('express');
const router = express.Router();
const authController = require('../../controller/loginController');

router.route('/login')
    .get(authController.getLogin)
    .post(authController.postLogin); 
    

router.route('/register')
    .post(authController.postRegister);

module.exports = router;
