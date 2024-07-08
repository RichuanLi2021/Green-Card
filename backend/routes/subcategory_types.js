const express = require('express')
const router = express.Router()
const { Subcategory, Subcategory_Type, Subcategory_Header, Subcategory_Data } = require('../models')
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken')
const { v4: uuidv4 } = require("uuid")
const subcategory_type_Controller = require('../controllers/subcategory_types_Controller')

// Get All
router.get('/', validateUserToken, subcategory_type_Controller.getAllSubTypes)

// Get One
router.get('/:id', validateUserToken, subcategory_type_Controller.getOneSubTypes)

// Create One
router.post('/', validateAdminToken, subcategory_type_Controller.createSubTypes)

// Update One
router.put('/:id', validateAdminToken, subcategory_type_Controller.updateSubTypes)

// Delete One
router.delete('/:id', validateAdminToken, subcategory_type_Controller.deleteSubTypes)

module.exports = router;