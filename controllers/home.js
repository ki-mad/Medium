const models = require('../models')
const Home = models.article
const Category = models.category
const User = models.user
const Comment = models.comment

exports.ArticleByCat = (req, res) => {
    Home.findAll({
        where: {category_id: req.params.id},
        include: [{
            model: Category,
            as: "categoryId"
        },
        {
            model: User,
            as: "userId"
        }   ],  
    }).then(data => res.send(data))
    .catch(err => res.send(err))
}

exports.showArticle = (req, res) => {
    Home.findAll({
        // where: {category_id: req.params.id},
        include: [{
            model: Category,
            as: "categoryId"
        },
        {
            model: User,
            as: "userId"
        }   ],  
    })
    .then(articles => res.send(articles))
    .catch(err => res.send(err));
}

exports.showLatestArticle = (req, res) => {
    Home.findAll({
        include: [
            {
                model: Category,
                as: "categoryId"
            },
            {
                model: User,
                as: "userId"
            }   
        ],
    })
    .then(articles => res.send(articles))
    .catch(err => res.send(err));
}

exports.store = (req, res) => {
    // const category_id = req.body.category_id
    Home.create(req.body)
    .then(article => {
        res.send({article})
        .catch(err => res.send(err))
    })
}

exports.getComment = (req, res) => {
    Home.findOne({
        where: {id: req.params.id},
        include: [
            {
                model: Category,
                as: "categoryId"
            },
            {
                model: User,
                as: "userId"
            },
            {
                model: Comment,
                as: "Comments"
            }
        ],
    })
        .then(article => res.send(article))
        .catch(err => res.send(err))
}

exports.updateArticle = (req, res) => {
    Home.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(data => {
        res.send({
            message: "Update Success",
            data
        })
    })
}

exports.deleteArticle = (req, res) => {
    Home.destroy({where: {id: req.params.id}})
    .then(data => {
        res.send({
            message: "Article Deleted",
            data
        })
    })
}