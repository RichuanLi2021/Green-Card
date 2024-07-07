const express = require('express');
const router = express.Router();
const { User, User_Role, Role } = require('../models');
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken');
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

// Get All (Admin Only)
router.get('/', validateAdminToken, async (req, res) => {
  try {
    await User.findAll({
      include: {
        model: User_Role,
        include: {
          model: Role
        }
      }
    })
      .then((message) => { return res.status(200).json(message) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Get One (User and Admin)
router.get('/:id', validateUserToken, async (req, res) => {
  try {
    await User.findOne({
      include: {
        model: User_Role,
        attributes: {
          exclude: ['UserId', 'RoleId']
        },
        include: {
          model: Role
        }
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
});

// Create One (Admin Only)
router.post('/', validateAdminToken, async (req, res) => {
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
});

// Update One (Admin Only)
router.put('/:id', validateAdminToken, async (req, res) => {
  const { discipline, email, password } = req.body;
  // Sanitize and validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
      User.update({
        discipline: discipline,
        email: email,
        password: hash
      }, {
        where: { uuid: req.params.id }
      })
        .then((result) => {
          if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating account' });
          return res.status(200).json({ message: 'Successfully updated account' });
        })
        .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
    });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Delete One (Admin)
router.delete('/admin/:id', validateAdminToken, async (req, res) => {
  try {
    await User.destroy({
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while trying to disable account' });
        return res.status(200).json({ message: 'Successfully disabled account' });
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Delete One (User)
router.delete('/user/:id', validateUserToken, async (req, res) => {
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
});

// Get User's Subscription Status
router.get('/:id/subscription', validateUserToken, async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: ['subscribed'],
      where: { uuid: req.params.id }
    });

    if (!user) {
      return res.status(404).json({ errorMessage: 'User not found' });
    }

    return res.status(200).json({ subscribed: user.subscribed });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Update User's Subscription Status
router.patch('/:id/subscription', validateUserToken, async (req, res) => {
  try {
    const { newSubscriptionStatus } = req.body;
    const [updated] = await User.update({
      subscribed: newSubscriptionStatus
    }, {
      where: { uuid: req.params.id }
    });

    if (updated === 0) {
      return res.status(400).json({ errorMessage: 'Encountered error while updating subscription status' });
    }

    const message = newSubscriptionStatus ? 'Successfully subscribed.' : 'Successfully unsubscribed.';
    return res.status(200).json({ message, subscribed: newSubscriptionStatus });

  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

module.exports = router;