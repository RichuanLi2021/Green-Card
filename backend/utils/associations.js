defineAssociations = (sequelize) => {
  const {
    Category,
    Role,
    Subcategory,
    Subcategory_Data,
    Subcategory_Header,
    Subcategory_Type,
    User_Role,
    User
  } = sequelize.models;

  Category.hasMany(Subcategory)

  Subcategory_Type.hasMany(Subcategory, { foreignKey: 'subcategoryTypeID' })

  Subcategory.belongsTo(Category, { foreignKey: 'categoryID' })
  Subcategory.belongsTo(Subcategory_Type, { foreignKey: 'subcategoryTypeID' })
  Subcategory.hasMany(Subcategory_Header)

  Subcategory_Header.belongsTo(Subcategory, { foreignKey: 'subcategoryID' })
  Subcategory_Header.hasMany(Subcategory_Data, { foreignKey: 'headerID' })

  Subcategory_Data.belongsTo(Subcategory_Header, { foreignKey: 'headerID' })

  User.hasMany(User_Role, { foreignKey: 'userID' })

  Role.hasMany(User_Role, { foreignKey: 'roleID' })

  User_Role.belongsTo(User, { foreignKey: 'userID' })
  User_Role.belongsTo(Role, { foreignKey: 'roleID' })
}

module.exports = { defineAssociations };