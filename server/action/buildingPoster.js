var express = require('express')
var router = express.Router()
let buildingPosterbl = require('../bl/buildingPosterbl')

router.post('/addNewPoster', async function (req, res) {
    var newPoster = await buildingPosterbl.addNewPoster(req.body)
    res.send(newPoster)
})
module.exports = router