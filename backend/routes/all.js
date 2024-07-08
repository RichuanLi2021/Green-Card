const express = require('express');
const router = express.Router();
const { validateUserToken } = require('../middleware/validateToken')
const allCategoryController = require ('../controllers/allCategoryController')

// Get All Categories (with subcategories, type, headers, and data)
router.get('/categories', allCategoryController.getAllCategory)

// Get All Subcategories (with type, headers, and data)
router.get('/subcategories', validateUserToken, allCategoryController.getAllSubcatrgories)

// Get All Subcategory Headers (with data)
router.get('/subcategory_headers', validateUserToken, allCategoryController.getAllSubcatrgories)

module.exports = router;
