'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategories extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryID', as: 'category' })
      this.belongsTo(models.Subcategory_Type, { foreignKey: 'subcategoryTypeID', as: 'subcategory_type' })
      this.hasMany(models.Subcategory_Header)
    }

    toJSON() {
      return { ...this.get(), id: undefined, categoryID: undefined, subcategoryTypeID: undefined }
    }
  }

  subcategories.init({
    categoryID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Subcategory must have a categoryID' },
        notEmpty: { msg: 'Subcategory categoryID cannot be empty' }
      }
    },
    subcategoryTypeID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Subcategory must have a typeID' },
        notEmpty: { msg: 'Subcategory typeID cannot be empty' }
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