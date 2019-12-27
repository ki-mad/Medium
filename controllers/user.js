const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const Follow = models.follow
const Article = models.article
const Category = models.category

exports.showFollow = (req, res) => {
    User.findOne({
        where: {id: req.params.id},
        include: [
            {
                model: Follow,
                as: "Followers",
            },
        ],  
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
}

//get all data
exports.listUser = (req, res) => {
    User.findAll().then(data => res.send(data))
    .catch(err => res.send(err))
}

exports.articleByPerson = (req, res) => {
    User.findOne({
        where: {id: req.params.id},
        include: [
            {
                model: Article,
                as: "articles",
                include: [
                    {
                        model: Category,
                        as: "categoryId"
                    }
                ]
            }
        ]
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
}