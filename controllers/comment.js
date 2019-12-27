const models = require('../models')
const Category = models.category
const Article = models.article
const User = models.user
const Comment = models.comment

exports.commentbyArticle = (req, res) => {
    Comment.findAll({
        where: {article_id: req.params.id},
        include: [{
            model: Article,
            as: "articleId",
            attributes: ['id', 'title']
        },
        {
            model: User,
            as: "userId",
            attributes: ['id']

        }   ],  
        attributes: {exclude: ['createdAt', 'updatedAt']} 
    }).then(data => res.send(data))
    .catch(err => res.send(err))
}

exports.storeComment = (req, res) => {
    Comment.create(req.body)
    .then(comment => {
        res.send({comment})
        .catch(err => res.send(err))
    })
}

exports.updateComment = (req, res) => {
    Comment.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(data => {
        res.send({
            message: "Update Success",
            data
        })
    })
}

exports.deleteComment = (req, res) => {
    Comment.destroy({where: {id: req.params.id}})
    .then(data => {
        res.send({
            message: "Comment Deleted",
            data
        })
    })
}