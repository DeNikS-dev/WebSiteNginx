const {Router} = require('express')
const router = Router()

const IndexPage = require('./indexPage')
const ContactPage = require('./contacts')

router.use(ContactPage)
router.use(IndexPage)
router.get('*', (req, res)=>{
    res.send('Sorry, page not found :( <a href="/">Back</a>')
})

module.exports = router