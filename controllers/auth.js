const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const Follow = models.follow
const Article = models.article

// exports.storeUser = (req, res) => {
//     User.create(req.body).then(data => {
//         res.send({data})
//         .catch(err => res.send(err))
//     })
// }

//register
exports.register = (req, res) => {
    User.create(req.body).then(dataUser =>
        res.send({
            message: "Berhasil Daftar",
            dataUser
        }))
}

//login
exports.login = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne( {where: {username, password}}).then(user => {
        if(user) {
            const token = jwt.sign({
                userId: user.id
            }, "my-secret-key")
            res.send({
                user,
                token
            })
        }else{
            res.send({
                    error: true,
                    message: "Wrong Username or Password"
            })
        }
    })
}

