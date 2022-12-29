const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()
const Article = require("./models/articles")
const methodOverride = require('method-override')

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
 
app.use('/articles', articleRouter)

app.get('/', async (req, res)=> {
   const articles = await Article.find()
   .sort({createdAt: "desc"})
    res.render('articles/index', {articles: articles})
})


app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message 
    })
})



module.exports = app