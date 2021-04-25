const dal = require("../dal/citydal")
var getAllCities = async () => {
    return await dal.getAllCities();;
}
module.exports = { getAllCities }