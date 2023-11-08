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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Feedback name cannot be empty' }
      },
      set(value) {
        this.setDataValue('name', value)
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Feedback email cannot be empty' },
        isEmail: { msg: 'Feedback email must be a valid email address' }
      },
      set(value) {
        this.setDataValue('email', value)
      }
    },
    comment: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Feedback must have a comment' },
        notEmpty: { msg: 'Feedback comment cannot be empty' }
      },
      set(value) {
        this.setDataValue('comment', value)
      }
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Feedback must have a rating' },
        notEmpty: { msg: 'Feedback rating cannot be empty' }
      },
      set(value) {
        this.setDataValue('rating', value)
      }
    },
    allowEmailBack: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: { msg: 'Feedback allowEmailBack cannot be empty' }
      },
      set(value) {
        this.setDataValue('allowEmailBack', value)
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