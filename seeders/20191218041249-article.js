'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articles', [
      {
        title: "Fundamental PHP",
        content:"text content",
        image:"https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg",
        is_published: 1,
        is_archived: 0,
        user_id: 1,
        category_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Fundamental JS",
        content:"text content",
        image:"https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg",
        is_published: 1,
        is_archived: 0,
        user_id: 1,
        category_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Fundamental Ruby",
        content:"text content",
        image:"https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg",
        is_published: 1,
        is_archived: 0,
        user_id: 1,
        category_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Fundamental C++",
        content:"text content",
        image:"https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg",
        is_published: 1,
        is_archived: 0,
        user_id: 1,
        category_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "Fundamental Visual Basic",
        content:"text content",
        image:"https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg",
        is_published: 1,
        is_archived: 0,
        user_id: 1,
        category_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: "HTML",
        content:"text content",
        image:"https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg",
        is_published: 1,
        is_archived: 0,
        user_id: 1,
        category_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('articles', null, {});
  }
};
