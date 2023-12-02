'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_roles extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined, userID: undefined, roleID: undefined }
    }
  }

  user_roles.init({
    uuid: {
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'User Role uuid cannot be empty' }
      }
    },
    userID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'User Role must have a user' },
        notEmpty: { msg: 'User Role user cannot be empty' }
      }
    },
    roleID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'User Role must have a role' },
        notEmpty: { msg: 'User Role role cannot be empty' }
      }
    }
  }, {
    sequelize,
    modelName: 'User_Role',
    tableName: 'user_roles',
    timestamps: true
  });

  return user_roles;
};