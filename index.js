require("express-group-routes")
//inisialisasi modul express
const express = require("express")
//mendeklarasikan express di dalam app variable
const app = express()
//mengatur port yang digunakan
const port = process.env.PORT || 5000
//init bodyparser
const bodyParser = require("body-parser");

//allow this app o receive incoming json request
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "*");
    res.header("Access-Control-Allow-Method", "*");
    next();
});

//middlewares
const { authenticated } = require("./middleware");

//membuat route home
app.get("/", (req, res) => {
    // res berarti response dan berfungsi mengirimkan "Hello Express" kepada API
    res.send("Hello Express")
})

// when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))

//import the controller
const CategoryControllers = require("./controllers/category")
const HomeControllers = require("./controllers/home")
const authControllers = require("./controllers/auth")
const commentControllers = require("./controllers/comment")
const followControllers = require("./controllers/follow")
const userControllers = require("./controllers/user")


app.group("/api/v1", (router) => {

    //todos API, call controller here in the callback

    //category
    //to get all field in table categories
    router.get("/categories", CategoryControllers.index)
    //post data to categories
    router.post("/category", authenticated, CategoryControllers.store)
    //show categories data by id
    router.get("/category/:id", CategoryControllers.showCategory)

    //article
    //show article by category id
    router.get("/article/:id", HomeControllers.ArticleByCat)
    // show all article field
    router.get("/articles", HomeControllers.showArticle)
    // show all article sort by newest article
    router.get("/latest_article", HomeControllers.showLatestArticle)
    router.post("/article", authenticated, HomeControllers.store )
    router.get("/articleComment/:id", HomeControllers.getComment)
    router.put("/article/:id", authenticated, HomeControllers.updateArticle)
    router.delete("/article/:id", authenticated, HomeControllers.deleteArticle)

    //user
    router.get("/users", authenticated, userControllers.listUser)
    // router.post("/user", authControllers.storeUser)
    router.get("/user/:id/articles", authenticated, userControllers.articleByPerson)


    router.post("/login", authControllers.login)
    router.post("/register", authControllers.register)

    //comment
    router.get("/article/:id/comment", authenticated, commentControllers.commentbyArticle)
    router.post("/comment", authenticated, commentControllers.storeComment )
    router.put("/comment/:id", authenticated, commentControllers.updateComment)
    router.delete("/comment/:id", authenticated, commentControllers.deleteComment)

    //follow
    router.get("/follow/:id", authenticated, userControllers.showFollow)
    
})