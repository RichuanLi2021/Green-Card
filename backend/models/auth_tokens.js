'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class auth_tokens extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userID', as: 'user_id' })
    }
  }

  auth_tokens.init({
    userID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Auth_Token must have an user' },
        notEmpty: { msg: 'Auth_Token user cannot be empty' }
      },
      get() {
        return this.getDataValue('userID')
      }
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notNull: { msg: 'Auth_Token must have an expiresAt' },
        notEmpty: { msg: 'Auth_Token expiresAt cannot be empty' },
        notDate: { msg: 'Auth_Token expiresAt must be a date'},
        expirationDate(value) {
          if (value <= this.createdAt || value <= this.updatedAt) {
            throw new Error('Auth_Token expiresAt must be dated after createdAt and updatedAt')
          }
        }
      },
      get() {
        return this.getDataValue('expiresAt')
      },
      set(value) {
        this.setDataValue('expiresAt', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Auth_Token',
    tableName: 'auth_tokens',
    timestamps: true
  });

  return auth_tokens;
};