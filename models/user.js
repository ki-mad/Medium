'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.article, {
      as: 'articles',
      foreignKey:'user_id',
      })

    user.hasMany(models.comment, {
      as: 'Comments',
      foreignKey:'user_id',
      })

    user.hasMany(models.follow, {
      as: 'Followers',
      foreignKey:'user_id',
      })
  };
  return user;
};