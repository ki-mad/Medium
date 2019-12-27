// const isLoggedIn = true;

// //Dummy authenticated middleware
// exports.authenticated = (req, res, next) => {
//     if(isLoggedIn)
//         next()
//     else{
//         res.send({
//             message: "You are Unauthenticated!"
//         })
//     }
// }

const jwt = require('express-jwt')

exports.authenticated = jwt({secret: 'my-secret-key'})