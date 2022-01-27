const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/csci430', (req, res) => {
    res.render('csci430')
})

module.exports = router