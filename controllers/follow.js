const models = require('../models')
const User = models.user
const Follow = models.follow

exports.store = (req, res) => {
    Follow.create(req.body).then(Follow => {
        res.send({Follow})
        .catch(err => res.send(err))
    })
}