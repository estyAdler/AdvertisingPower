var express = require('express')
var router = express.Router()
var userbl = require('../bl/userbl');

router.post('/login', async function (req, res) {
    var userLogin = await userbl.login(req.body)
    res.send(userLogin)
})
router.post('/register', async function (req, res) {
    var userLogin = await userbl.register(req.body)
    res.send(userLogin)
})
module.exports = router