const express = require('express');
const router = express.Router();
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken')
const subcategory_data_Controller = require('../controllers/subcategory_data_Controller')

// Get All
router.get('/', validateUserToken, subcategory_data_Controller.getAllSubData)

// Get One
router.get('/:id', validateUserToken, subcategory_data_Controller.getOneSubData)

// Create One
router.post('/', validateAdminToken, subcategory_data_Controller.createOneSubData)

// Update One
router.put('/:id', validateAdminToken, subcategory_data_Controller.updateSubData)

// Delete One
router.delete('/:id', validateAdminToken, subcategory_data_Controller.deleteSubData)

module.exports = router;