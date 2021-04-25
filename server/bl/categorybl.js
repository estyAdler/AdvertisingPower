const Business = require("../models/business");
const building_poster = require("../models/building_poster");
const dal = require("../dal/categorydal");

/* var add = async (req) => {
    const user = new User.User(req);
    return await dal.getUserByLogin(user);
}; */
var getAllCategories = async () => {
    return await dal.getAllCategories();
}
var getCategoryName = async (req) => {
    const business = new Business.Business(req)
    return await dal.getCategoryName(business);
}
module.exports = { getAllCategories, getCategoryName }


