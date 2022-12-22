const express = require('express')
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
const app = express()
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/articles', articleRouter) 


app.get('/', (req, res)=> {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
{
    title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
}]
    res.render('articles/index', {articles: articles})
})




module.exports = app