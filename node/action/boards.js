var express = require('express')
var router = express.Router()
var boardsbl = require('../bl/boardsbl');

router.post('/getPosters', async function (req, res) {
    var posters = await boardsbl.getPosters(req.body)
    res.send(posters)
})
router.post('/getBuilderPosters', async function (req, res) {
    var posters = await boardsbl.getBuilderPosters(req.body)
    res.send(posters)
})
router.post('/insertPosterToBoard', async function (req, res) {
    var posters = await boardsbl.insertPosterToBoard(req.body)
    res.send(posters)
})
router.post('/getBoardByBID', async function (req, res) {
    var bPosters = await boardsbl.getBoardByBID(req.body)
    res.send(bPosters)
})
module.exports = router