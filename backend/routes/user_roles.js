const express = require('express');
const router = express.Router();
const { validateAdminToken } = require('../middleware/validateToken');
const userRoleController = require('../controllers/userRolesController');

//Update the user's privilege
router.put('/', validateAdminToken, userRoleController.updateUserRole);

module.exports = router;