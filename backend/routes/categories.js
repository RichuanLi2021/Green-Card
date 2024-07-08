const express = require('express');
const router = express.Router();
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken')
const categoriesController = require('../controllers/categoriesController')

// Get All
router.get('/', validateUserToken, categoriesController.getAllCategories)

// Get One
router.get('/:id', validateUserToken, categoriesController.getOneCategory)

// Create One
router.post('/', validateAdminToken, categoriesController.createOneCategory)

// Update One
router.put('/:id', validateAdminToken, categoriesController.updateOneCategory)

// Delete One
router.delete('/:id', validateAdminToken, categoriesController.deleteOneCategory)

module.exports = router;