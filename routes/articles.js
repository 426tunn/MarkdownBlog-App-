const express = require ('express')
const Article = require ('./../models/articles.js')

const router = express.Router()

router.get('/new' , (req, res)=> {
    res.render('articles/new', {article: new Article()} )
})

router.get('/:id', async  (req, res)=> {
const article = await Article.findById(req.params.id)
if (!article) {
    res.redirect('/')
}
res.render('articles/show')
})
 

router.post('/', async (req,res) => {

try {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown:  req.body.markdown
    })

    console.log('666666')
        await article.save()
        console.log(article)
        res.redirect(`/articles/${article._id}`)

    } catch (error) {
    res.render("articles/new", {article: req.body})
}
})
 
module.exports = router 