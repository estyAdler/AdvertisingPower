var express = require('express')
var router = express.Router()
let categorybl = require('../bl/categorybl');

router.post('/getAllCategories', async function (req, res) {
    var allCategories = await categorybl.getAllCategories()
    res.send(allCategories)
})
router.post('/getCategoryName', async function (req, res) {
    var Category = await categorybl.getCategoryName(req.body)
    res.send(Category)
})
module.exports = router