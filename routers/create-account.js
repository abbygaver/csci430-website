const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/create-account', (req, res) => {
    res.render('create-account')
})

module.exports = router