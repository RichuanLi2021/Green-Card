const express = require('express');
const router = express.Router();
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken');
const userController = require('../controllers/userController');

// Get All (Admin Only)
router.get('/', validateAdminToken, userController.getAllUsers);

// Get One (User and Admin)
router.get('/:id', validateUserToken, userController.getUserByID);

// Create One (Admin Only)
router.post('/', validateAdminToken, userController.createAnUser);

// Update One (Admin Only)
router.put('/:id', validateAdminToken, userController.updateUser);

// Delete One (Admin)
router.delete('/admin/:id', validateAdminToken, userController.deleteUserAdmin);

// Delete One (User)
router.delete('/user/:id', validateUserToken, userController.deleteUser);

// Get User's Subscription Status
router.get('/:id/subscription', validateUserToken, userController.getUserSubscription);

// Update User's Subscription Status
router.patch('/:id/subscription', validateUserToken, userController.updateUserSubscription);

module.exports = router;