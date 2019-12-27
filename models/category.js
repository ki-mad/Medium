'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  category.associate = function(models) {
    // associations can be defined here
      // category.hasMany(models.article, {
      // as: 'Articles',
      // foreignKey:'category_id',
      // })
  };
  return category;
};