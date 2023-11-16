'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  feedback.init({
    uuid: {
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Feedback uuid cannot be empty' }
      }
    },
    comment: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Feedback must have a comment' },
        notEmpty: { msg: 'Feedback comment cannot be empty' }
      }
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Feedback must have a rating' },
        notEmpty: { msg: 'Feedback rating cannot be empty' }
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Feedback name cannot be empty' }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Feedback email cannot be empty' },
        isEmail: { msg: 'Feedback email must be a valid email address' }
      }
    },
    allowEmailBack: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: { msg: 'Feedback must allow or disallow email follow up' }
      }
    }
  }, {
    sequelize,
    modelName: 'Feedback',
    tableName: 'feedback',
    timestamps: true,
    updatedAt: false
  });

  return feedback;
};