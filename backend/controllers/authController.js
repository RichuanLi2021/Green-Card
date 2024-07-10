const { User, User_Role, Role } = require('../models');
const { createToken } = require('../utils/token')
const { v4: uuidv4 } = require("uuid")
const bcrypt = require('bcrypt')
const env = require('../config/env');
const crypto = require('crypto');

// Authenticate user login
exports.userLogin = async (req, res) => {
    if (req.cookies['access-token']) return res.status(400).json({ errorMessage: 'Already logged in' })

        const { email, password, } = req.body
        // Sanitize and Validate
      
        try {
          const user = await User.findOne({
            where: { email: email }
          })
          if (!user) return res.status(400).json({ errorMessage: 'Incorrect email or password, or the account does not exist' })
          if (!user.verified) return res.status(400).json({ errorMessage: 'Account has not been verified yet' })
      
          bcrypt.compare(password, user.password).then(async (match) => {
            if (!match) return res.status(400).json({ errorMessage: 'Incorrect email or password, or the account does not exist' })
      
            await User.update(
              {
                lastLogin: new Date()
              }, {
                where: { id: user.id }
              })
      
            const role = await Role.findOne({
              include: {
                model: User_Role,
                include: {
                  model: User,
                  where: { uuid: user.uuid }
                }
              }
            })
            const roleTitle = role.dataValues.title
      
            const token = createToken(user, roleTitle)
            return res
              .status(200)
              .cookie(
                'access-token',
                token,
                {
                  httpOnly: true,
                  maxAge: env.JWT_LENGTH_MS,
                  sameSite: 'Lax',   // Cannot be 'None' when 'secure' is false
                  secure: false   //Temporarily bypass security requirement to allow cookie over HTTP
                }
              ).json({ message: 'Successfully logged in', token: token, role: roleTitle, uuid: user.uuid })
          })
        } catch (error) {
          return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while logging in' })
        }
}


// Handle user logout
exports.userLogout = async (req, res) => {
    try {
        if (!req.cookies['access-token']) return res.status(400).json({ errorMessage: 'Not logged in' })
        return res.clearCookie('access-token').status(200).json({ message: 'Successfully logged out' })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while logging out' })
      }
}


// Handle new user register
exports.userRegister = async (req, res) => {
    if (req.cookies['access-token']) return res.status(400).json({ errorMessage: 'Cannot register a new account while logged in' })

        const { discipline, firstName, lastName, email, password, title} = req.body
        // Sanitize and Validate
      
        try {
          bcrypt.hash(password, 12).then((hash) => {
              User.create({
                uuid: uuidv4(),
                discipline: discipline,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash,
                title: title
              })
                .then((user) => {
                  User_Role.create({
                    uuid: uuidv4(),
                    userID: user.id,
                    roleID: 2 // 'user' role
                  })
                    .then(() => { return res.status(201).json({ message: `Successfully registered account for ${user.email}`, user }) })
                    .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
                  })
                .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
          })
            .catch((error) => { return res.status(400).json({ error, errorMessage: 'Encountered unexpected error while registering account' }) })
        } catch (error) {
          return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while registering account' })
        }
}

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ errorMessage: 'User not found' });
    }

    // Generate a password reset token and set expiry
    const passwordResetToken = crypto.randomBytes(20).toString('hex');
    const passwordResetTokenExpiry = new Date(Date.now() + 3600000); // Token expires in 1 hour

    // Save the token and expiry to the user record
    user.passwordResetToken = passwordResetToken;
    user.passwordResetTokenExpiry = passwordResetTokenExpiry;
    await user.save();


    // Debug log
    console.log('Generated token:', passwordResetToken);
    console.log('Expiry:', passwordResetTokenExpiry);


    /*
    // Send email with password reset link containing token
    // Example implementation using Nodemailer:
    const resetLink = `http://example.com/reset-password?token=${passwordResetToken}`;
    await sendPasswordResetEmail(email, resetLink);
    */

    return res.status(200).json({ message: 'Password reset email sent', token: passwordResetToken});
  } catch (error) {
    console.error('Error requesting password reset:', error);
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while requesting password reset', error: error.message });
  }
}

exports.resetPassword = async (req, res) => {
  //const { token } = req.params.token; // Get the token from the request URL parameters
  //console.log(req.params.token);
  const { newPassword: password, token } = req.body; // Get the new password from the request body

  try {
    const user = await User.findOne({ where: { passwordResetToken: token } });

   // Debug logs
   console.log('Token from params:', token);
   console.log('User found:', user ? user.email : 'No user found');
   if (user) {
     console.log('Token expiry:', user.passwordResetTokenExpiry);
     console.log('Current time:', new Date());
   }

    if (!user || user.passwordResetTokenExpiry < new Date()) {
      return res.status(400).json({ errorMessage: 'Invalid or expired password reset token' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    console.log(hashedPassword + "22222222")

    // Update the user's password and clear the reset token and expiry
    user.password = hashedPassword;
    console.log(user.password);
    user.passwordResetToken = null;
    user.passwordResetTokenExpiry = null;
    await user.save();

    return res.status(200).json({ message: 'Password has been successfully reset' });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(500).json({ errorMessage: 'Encountered unexpected error while resetting password', error: error.message });
  }
}