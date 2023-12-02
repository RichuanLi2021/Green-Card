'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategory_types extends Model {
    static associate(models) {
      this.hasMany(models.Subcategory)
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  subcategory_types.init({
    uuid: {
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Subcategory Type uuid cannot be empty' }
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Type must have a title' },
        notEmpty: { msg: 'Type title cannot be empty' }
      }
    }
  }, {
    sequelize,
    modelName: 'Subcategory_Type',
    tableName: 'subcategory_types',
    timestamps: true
  });

  return subcategory_types;
};