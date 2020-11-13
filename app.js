const express = require('express')
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

app.get('/', (req, res)=> {
    res.send('Hello')
})



mongoose.connect(process.env.DB_CONNECTION,  { useNewUrlParser: true,useUnifiedTopology: true }, ()=> console.log('connected to db'))

app.listen(3000)