const { Op } = require('sequelize');
const { User_Role } = require('../models');

// Update the user privelige
exports.updateUserRole = async (req, res) => {
    const { userIDs, newRoleID } = req.body;

  if (!Array.isArray(userIDs) || typeof newRoleID !== 'number') {
    return res.status(400).json({ error: 'Invalid request data' });
  }

  try {
    const [updatedUsersNum] = await User_Role.update(
        { roleID: newRoleID },
        {
          where: {
            userID: {
              [Op.in]: userIDs
            }
          }
        }
    );

    if (updatedUsersNum === 0) {
      return res.status(404).json({ message: 'No users found or roles were not updated' });
    }

    res.status(200).json({ message: 'User roles updated successfully', updatedUsersNum });
  } catch (error) {
    console.error('Error updating user roles:', error);
    res.status(500).json({ error: 'Encountered unexpected error', errorMessage: error.message });
  }
}