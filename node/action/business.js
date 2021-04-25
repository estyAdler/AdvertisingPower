var express = require('express')
var router = express.Router()
let businessbl = require('../bl/businessbl');

router.post('/signUp', async function (req, res) {
    var businessSignUp = await businessbl.signUp(req.body)
    res.send(businessSignUp)
})
router.post('/login', async function (req, res) {
    var business = await businessbl.login(req.body.ID)
    res.send(business)
})
router.post('/getBusinessName', async function (req, res) {
    var businessName = await businessbl.getBusinessName(req.body)
    res.send(businessName)
})
router.post('/getAllUsers', async function (req, res) {
    var AllUsers = await businessbl.getAllUsers(req.body)
    res.send(AllUsers)
})
module.exports = router