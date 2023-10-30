'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_roles extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userID', as: 'user' })
      this.belongsTo(models.Role, { foreignKey: 'roleID', as: 'role' })
    }

    toJSON() {
      return {} // Table contains only IDs, so no return values necessary
    }
  }

  user_roles.init({
    userID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'User Role must have a userID' },
        notEmpty: { msg: 'User Role userID cannot be empty' }
      }
    },
    roleID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'User Role must have a roleID' },
        notEmpty: { msg: 'User Role roleID cannot be empty' }
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