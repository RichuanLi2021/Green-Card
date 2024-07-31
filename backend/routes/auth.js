const express = require('express')
const router = express.Router()
const authController = require ('../controllers/authController')
const {validateUserToken} = require("../middleware/validateToken");

router.post('/login', authController.userLogin);

router.post('/logout', authController.userLogout);

router.post('/register', authController.userRegister);

router.put('/forgot-password', authController.forgotPassword);

router.put('/reset-password/:token', authController.resetPassword);

router.put('/change-password/:uuid', validateUserToken, authController.changePassword);

module.exports = router