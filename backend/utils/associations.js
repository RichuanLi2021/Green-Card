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

  Subcategory_Type.hasMany(Subcategory)

  Subcategory.belongsTo(Category, { foreignKey: 'categoryID', targetKey: 'id' })
  Subcategory.belongsTo(Subcategory_Type, { foreignKey: 'subcategoryTypeID', targetKey: 'id' })
  Subcategory.hasMany(Subcategory_Header)

  Subcategory_Header.belongsTo(Subcategory, { foreignKey: 'subcategoryID', targetKey: 'id' })
  Subcategory_Header.hasMany(Subcategory_Data)

  Subcategory_Data.belongsTo(Subcategory_Header, { foreignKey: 'headerID', targetKey: 'id' })

  User.hasMany(User_Role)

  Role.hasMany(User_Role)

  User_Role.belongsTo(User, { foreignKey: 'userID', targetKey: 'id' })
  User_Role.belongsTo(Role, { foreignKey: 'roleID', targetKey: 'id' })
}

module.exports = { defineAssociations };