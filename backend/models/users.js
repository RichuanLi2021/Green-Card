'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined, password: undefined }
    }
  }

  users.init({
    uuid: {
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'User uuid cannot be empty' }
      }
    },
    discipline: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'User discipline cannot be empty' }
      }
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'User occupation cannot be empty' }
      }
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'first name cannot be empty' }
      }
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'last name cannot be empty' }
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have an email address' },
        notEmpty: { msg: 'Email address cannot be empty' },
        isEmail: { msg: 'Email address must be valid' }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a password' },
        notEmpty: { msg: 'Password cannot be empty' }
      }
    },
    verified: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: { msg: 'User verification cannot be empty' }
      },
    },
    emailVerificationToken: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: { msg: 'Email verification token cannot be empty' }
      }
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: { msg: 'Password reset token cannot be empty' }
      }
    },
    passwordResetTokenExpiry: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: { msg: 'Password reset token expiry must be a valid date' }
      }
    },
    subscribed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: { msg: 'Subscription status cannot be null' }
      }
    },
    lastLogin: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: { msg: 'User lastLogin cannot be empty' },
        isDate: { msg: 'User lastLogin must be a date' }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    tableName: 'users',
    timestamps: true
  });

  return users;
};