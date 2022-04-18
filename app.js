const express = require('express')
const expHbs = require('express-handlebars')
require('dotenv').config()
const router = require('./routers/mainRouter')
const favicon = require('express-favicon')
const path = require("path");
const app = express()

const PORT = process.env.PORT

const hbs = expHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.set('view engine', 'hbs')
app.set('views', 'pages')
app.engine('hbs', hbs.engine)

app.use(express.static('css'))
app.use(express.static('./css/block'))
app.use(express.static('./css/source'))
app.use(router)

app.listen(PORT, ()=>{
    console.log(`Server start on ${PORT}`)
})