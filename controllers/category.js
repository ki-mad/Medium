const models = require('../models')
const Category = models.category
const Home = models.article

exports.index = (req, res) => {
    Category.findAll().then(data => res.send(data))
    .catch(err => res.send(err))
}

exports.store = (req, res) => {
    Category.create(req.body).then(category => {
        res.send({category})
        .catch(err => res.send(err))
    })
}

exports.showCategory = (req, res) => {
    Home.findAll({
        where: {category_id: req.params.id},
        include: [{
            model: Category,
            as: "categoryId"
        }],  
    })
    .then(articles => res.send(articles))
    .catch(err => res.send(err));
}