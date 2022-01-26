const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/csci430', (req, res) => {
    const dir = path.join(__dirname,"../templates/courses/csci430.html")
    res.sendFile(dir)
})

module.exports = router