'use strict';
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    user_id: DataTypes.INTEGER,
    followers: DataTypes.INTEGER
  }, {});
  follow.associate = function(models) {
    // associations can be defined here
    follow.belongsTo(models.user, {
      as : "userId",
      foreignKey: 'user_id',
    })
  };
  return follow;
};