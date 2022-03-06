const express = require('express')
const indexRouter = express.Router()

indexRouter
    .route('/about')
    .get((req, res)=>{
    res.render('about', {
        title: 'About page',
        style: 'about.css'
    })
})

module.exports = indexRouter