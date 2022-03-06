const express = require('express')
const indexRouter = express.Router()

indexRouter
    .route('/contact')
    .get((req, res)=>{
        res.render('contact', {
            title: 'Contact page',
            style: 'contact.css'
        })
})

module.exports = indexRouter