const express = require('express')
const router = express.Router()
const authController = require ('../controllers/authController')

router.post('/login', authController.userLogin);

router.post('/logout', authController.userLogout);

router.post('/register', authController.userRegister);

router.put('/forgot-password', authController.forgotPassword);

router.put('/reset-password', authController.resetPassword);

module.exports = router