const express = require('express')
const expHbs = require('express-handlebars')
require('dotenv').config()
const Index = require('./routers/indexPage')
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
app.use(Index)
app.use(About)
app.use(Contact)
app.use(Hello)

app.listen(PORT, ()=>{
    console.log(`Server start on ${PORT}`)
})