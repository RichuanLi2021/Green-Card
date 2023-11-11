'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined, password: undefined }
    }
  }

  users.init({
    uuid: {
      defaultValue: uuidv4(),
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'User uuid cannot be empty' }
      }
    },
    fName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a fName' },
        notEmpty: { msg: 'User fName cannot be empty' }
      }
    },
    lName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a lName' },
        notEmpty: { msg: 'User lName cannot be empty' }
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have an email' },
        notEmpty: { msg: 'User email cannot be empty' },
        isEmail: { msg: 'User email must be a valid email address' }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a password' },
        notEmpty: { msg: 'User password cannot be empty' }
      }
    },
    verified: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: { msg: 'User verified cannot be empty' }
      }
    },
    lastLogin: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: { msg: 'User lastLogin cannot be empty' },
        isDate: { msg: 'User lastLogin must be a date'}
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