'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class user_roles extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userID', as: 'user' })
      this.belongsTo(models.Role, { foreignKey: 'roleID', as: 'role' })
    }

    toJSON() {
      return { ...this.get(), id: undefined, userID: undefined, roleID: undefined }
    }
  }

  user_roles.init({
    uuid: {
      defaultValue: uuidv4(),
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
        notNull: { msg: 'User Role must have a userID' },
        notEmpty: { msg: 'User Role userID cannot be empty' }
      },
      set(value) {
        this.setDataValue('userID', value)
      }
    },
    roleID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'User Role must have a roleID' },
        notEmpty: { msg: 'User Role roleID cannot be empty' }
      },
      set(value) {
        this.setDataValue('roleID', value)
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