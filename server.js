const app = require('./app')

const {connectToDB} = require('./db')
require('dotenv').config();

const PORT = process.env.PORT || 5000

connectToDB();
app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})