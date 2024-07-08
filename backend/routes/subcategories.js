const express = require('express')
const router = express.Router()
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken')
const subcategoryController = require('../controllers/subcategoryController')

// Get All
router.get('/', validateUserToken, subcategoryController.getAllSubcategories)

// Get One
router.get('/:id', validateUserToken, subcategoryController.getOneSubcategory)

// Create One
router.post('/', validateAdminToken, subcategoryController.createOneSubcategory)

// Update One
router.put('/:id', validateAdminToken, subcategoryController.updateOneSubcategory)

// Delete One
router.delete('/:id', validateAdminToken, subcategoryController.deleteOneSubcategory)

module.exports = router;