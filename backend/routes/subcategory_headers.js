const express = require('express');
const router = express.Router();
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken')
const subcategory_header_Controller = require('../controllers/subcategory_header_Controller')

// Get All
router.get('/', validateUserToken, subcategory_header_Controller.getAllSubHeader)

// Get One
router.get('/:id', validateUserToken, subcategory_header_Controller.getOneSubHeader)

// Create One
router.post('/', validateAdminToken, subcategory_header_Controller.createOneSubHeader)

// Update One
router.put('/:id', validateAdminToken, subcategory_header_Controller.updateSubHeader)

// Delete One
router.delete('/:id', validateAdminToken, subcategory_header_Controller.deleteOneSubHeader)

module.exports = router;