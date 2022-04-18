const express = require('express')
const indexRouter = express.Router()

indexRouter
    .route('/contacts')
    .get((req, res)=>{
        res.render('contacts', {
            title: 'Contacts page'
        })
    })

module.exports = indexRouter