const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()
const Article = require("./models/articles")
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/articles', articleRouter) 


app.get('/', async (req, res)=> {
   const articles = await Article.find()
   .sort({creeatedAt: "desc"})
    res.render('articles/index', {articles: articles})
})


app.use((err, req, res, next) => {
    // console.log(err);
    res.status(500).json({
        error: err.message 
    })
})



module.exports = app