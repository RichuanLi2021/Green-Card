const { User, User_Role, Role } = require('../models');
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

// Get All (Admin Only)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
          include: {
            model: User_Role,
            attributes: { exclude: ['UserId', 'RoleId'] },
            include: { model: Role }
          }
        });
        return res.status(200).json(users);
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
      }
}

// Get One (User and Admin)
exports.getUserByID = async (req, res) => {
    try {
        await User.findOne({
          include: {
            model: User_Role,
            attributes: {exclude: ['UserId', 'RoleId']},
            include: {model: Role}
          },
          where: { uuid: req.params.id }
        })
          .then((message) => {
            if (!message) return res.status(400).json({ errorMessage: 'Encountered error while trying to find account' });
            return res.status(200).json(message);
          })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
      }
}

exports.createAnUser = async (req, res) => {
    const { discipline, firstName, lastName, email, password } = req.body;
  // Sanitize and validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
      User.create({
        uuid: uuidv4(),
        discipline: discipline,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash
      })
        .then((user) => {
          User_Role.create({
            uuid: uuidv4(),
            userID: user.id,
            roleID: 2 // 'user' Role
          })
            .then(() => { res.status(201).json({ message: 'Successfully created account', user }) })
            .catch((error) => { res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
        })
        .catch((error) => { res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
    });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
}

// Update One (Admin Only)
exports.updateUser = async (req, res) => {
    const { discipline, email, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, 12);
      const result = await User.update({
        discipline,
        email,
        password: hash
      }, {
        where: { uuid: req.params.id }
      });
      if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating account' });
      return res.status(200).json({ message: 'Successfully updated account' });
    } catch (error) {
      return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
    }
  };
  
  // Delete One (Admin)
  exports.deleteUserAdmin = async (req, res) => {
    try {
      const result = await User.destroy({ where: { uuid: req.params.id } });
      if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while trying to disable account' });
      return res.status(200).json({ message: 'Successfully disabled account' });
    } catch (error) {
      return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
    }
  };
  
  // Delete One (User)
  exports.deleteUser = async (req, res) => {
    if (req.user.uuid !== req.params.id) {
      return res.status(403).json({ error: 'User is not authorized to delete this account' });
    }
    try {
      const result = await User.destroy({ where: { uuid: req.params.id } });
      if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while trying to disable account' });
      return res.status(200).json({ message: 'Successfully disabled account' });
    } catch (error) {
      return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
    }
  };
  
  // Get User's Subscription Status
  exports.getUserSubscription = async (req, res) => {
    try {
      const user = await User.findOne({ attributes: ['subscribed'], where: { uuid: req.params.id } });
      if (!user) return res.status(404).json({ errorMessage: 'User not found' });
      return res.status(200).json({ subscribed: user.subscribed });
    } catch (error) {
      return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
    }
  };
  
  // Update User's Subscription Status
  exports.updateUserSubscription = async (req, res) => {
    try {
      const { newSubscriptionStatus } = req.body;
      const [updated] = await User.update({ subscribed: newSubscriptionStatus }, { where: { uuid: req.params.id } });
      if (updated === 0) return res.status(400).json({ errorMessage: 'Encountered error while updating subscription status' });
      const message = newSubscriptionStatus ? 'Successfully subscribed.' : 'Successfully unsubscribed.';
      return res.status(200).json({ message, subscribed: newSubscriptionStatus });
    } catch (error) {
      return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
    }
  };