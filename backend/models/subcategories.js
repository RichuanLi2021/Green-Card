'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategories extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined, categoryID: undefined, subcategoryTypeID: undefined }
    }
  }

  subcategories.init({
    uuid: {
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Subcategory uuid cannot be empty' }
      }
    },
    categoryID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Subcategory must have a category' },
        notEmpty: { msg: 'Subcategory category cannot be empty' }
      }
    },
    subcategoryTypeID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Subcategory must have a type' },
        notEmpty: { msg: 'Subcategory type cannot be empty' }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Subcategory description cannot be empty' }
      }
    }
  }, {
    sequelize,
    modelName: 'Subcategory',
    tableName: 'subcategories',
    timestamps: true
  });

  return subcategories;
};