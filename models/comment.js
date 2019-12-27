'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.user, {
      as: "userId",
      foreignKey: 'user_id',
    })

    comment.belongsTo(models.article, {
      as: "articleId",
      foreignKey: "article_id"
    })
  };
  return comment;
};