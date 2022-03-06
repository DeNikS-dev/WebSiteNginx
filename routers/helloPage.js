const express = require('express')
const indexRouter = express.Router()

indexRouter
    .route('/hello')
    .get((req, res)=>{
        res.render('hello', {
            title: 'Hello page',
            style: 'hello.css'
        })
})

module.exports = indexRouter