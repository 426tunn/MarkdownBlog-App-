const app = require('./app')
// require('dotenv').config();


const PORT = process.env.PORT || 3344
app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})