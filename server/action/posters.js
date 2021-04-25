var express = require('express')
var router = express.Router()
let citybl = require('../bl/citybl')
let postersbl = require('../bl/postersbl');
router.post('/getAllCities', async function (req, res) {
    var AllCities = await citybl.getAllCities()
    res.send(AllCities)
})
router.post('/insertCitiesPosters', async function (req, res) {
    var CitiesPosters = await postersbl.insertCitiesPosters(req.body);
    res.send(CitiesPosters)
})
router.post('/addNewPoster', async function (req, res) {
    var newPoster = await postersbl.addNewPoster(req.body)
    console.log("action", newPoster);
    res.send(newPoster)
})
router.post('/addPoster', async function (req, res) {
    //var WaitPosters = await postersbl.getWaitPosters()
    // res.send(WaitPosters)
})
router.post('/getSizePosters', async function (req, res) {
    var SizePosters = await postersbl.getSizePosters()
    res.send(SizePosters)
})
router.post('/getWaitPosters', async function (req, res) {
    var WaitPosters = await postersbl.getWaitPosters()
    res.send(WaitPosters)
})
router.post('/updateStatus', async function (req, res) {
    var updateStatus = await postersbl.updateStatus(req.body)
    res.send(updateStatus)
})
router.post('/getPostersByBusinessID', async function (req, res) {
    var postersByBusinessID = await postersbl.getPostersByBusinessID(req.body)
    res.send(postersByBusinessID)
})
router.post('/changePrice', async function (req, res) {
    var Price = await postersbl.changePrice(req.body)
    res.send(Price)
})
router.post('/decreaseWeek', async function (req, res) {
    var data = await postersbl.decreaseWeek()
    res.send(data)
})
module.exports = router