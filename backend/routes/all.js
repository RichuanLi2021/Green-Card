const express = require('express');
const router = express.Router();
const { validateUserToken } = require('../middleware/validateToken')
const categoryController = require ('../controllers/categoryController')

// Get All Categories (with subcategories, type, headers, and data)
router.get('/categories', categoryController.getAllCategory)

// Get All Subcategories (with type, headers, and data)
router.get('/subcategories', validateUserToken, categoryController.getAllSubcatrgories)

// Get All Subcategory Headers (with data)
router.get('/subcategory_headers', validateUserToken, categoryController.getAllSubHeaders)

module.exports = router;
