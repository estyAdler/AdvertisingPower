var express = require('express')
var router = express.Router()
let buildingbl = require('../bl/buildingbl');

router.post('/signUp', async function (req, res) {
    var buildingSignUp = await buildingbl.signUp(req.body)
    res.send(buildingSignUp)
})
router.post('/login', async function (req, res) {
    var building = await buildingbl.login(req.body.ID)
    res.send(building)
})
router.post('/insertBuildingCategory', async function (req, res) {
    var buildingCategories = await buildingbl.insertBuildingCategory(req.body)
    res.send(buildingCategories)
})
router.post('/monthlyStatement', async function (req, res) {
    var building = await buildingbl.monthlyStatement(req.body)
    res.send(building)
})
router.post('/addData', async function (req, res) {
    var building = await buildingbl.addData(req.body)
    res.send(building)
})
router.post('/getAllUsers', async function (req, res) {
    var AllUsers = await buildingbl.getAllUsers(req.body)
    res.send(AllUsers)
})
router.post('/getNewBuildings', async function (req, res) {
    var NewBuildings = await buildingbl.getNewBuildings(req.body)
    res.send(NewBuildings)
})
router.post('/changeStatus', async function (req, res) {
    var building = await buildingbl.changeStatus(req.body)
    res.send(building)
})
router.post('/updateNumWeekOrder', async function (req, res) {
    var building = await buildingbl.updateNumWeekOrder(req.body)
    res.send(building)
})
module.exports = router