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
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Feedback must have a name' },
        notEmpty: { msg: 'Feedback name cannot be empty' }
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Feedback must have an email' },
        notEmpty: { msg: 'Feedback email cannot be empty' },
        isEmail: { msg: 'Feedback email must be a valid email address' }
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
    allowEmailBack: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: { msg: 'Feedback must have an allowEmailBack' },
        notEmpty: { msg: 'Feedback allowEmailBack cannot be empty' }
      }
    }
  }, {
    sequelize,
    modelName: 'Feedback',
    tableName: 'feedback',
    timestamps: true
  });

  return feedback;
};