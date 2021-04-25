var express = require('express')
var router = express.Router()
var designerbl = require('../bl/designerbl');

router.post('/addNewPoster', async function (req, res) {
    var posters = await designerbl.addNewPoster(req.body)
    res.send(posters)
})
router.post('/getPosters', async function (req, res) {
    var posters = await designerbl.getPosters()
    res.send(posters)
})
module.exports = router