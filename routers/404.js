const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/404', (req, res) => {
    const dir = path.join(__dirname,"../templates/404.html")
    res.sendFile(dir)
})

module.exports = router