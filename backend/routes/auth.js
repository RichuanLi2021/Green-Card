const express = require('express')
const router = express.Router()
const authController = require ('../controllers/authController')

router.post('/login', authController.userLogin);

router.post('/logout', authController.userLogout);

router.post('/register', authController.userRegister);

module.exports = router