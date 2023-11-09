'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class auth_tokens extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userID', as: 'user_id' })
    }

    toJSON() {
      return { ...this.get(), id: undefined, userID: undefined }
    }
  }

  auth_tokens.init({
    uuid: {
      defaultValue: uuidv4(),
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Auth Token uuid cannot be empty' }
      }
    },
    userID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Auth Token must have an user' },
        notEmpty: { msg: 'Auth Token user cannot be empty' }
      }
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notNull: { msg: 'Auth Token must have an expiresAt' },
        notEmpty: { msg: 'Auth Token expiresAt cannot be empty' },
        isDate: { msg: 'Auth Token expiresAt must be a date'},
        expireDateIsYounger(value) {
          if (value <= this.createdAt && !this.updatedAt) {
            throw new Error('Auth Token expiresAt must be dated after createdAt')
          } else if (value <= this.createdAt && value <= this.updatedAt) {
            throw new Error('Auth Token expiresAt must be dated after createdAt and updatedAt')
          }
        }
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