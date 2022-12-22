const app = require('./app')

const {connectToDB} = require('./db')
require('dotenv').config();

const PORT = process.env.PORT || 3344

connectToDB();
app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})