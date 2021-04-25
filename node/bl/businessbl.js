const Business = require("../models/business");
const businessPoster = require("../models/business_poster");
const dal = require("../dal/businessdal");
const categorydal = require("../dal/categorydal");

var signUp = async (req) => {
    const business = new Business.Business(req);
    const idcat = await categorydal.get(business.category)
    business.category = idcat.ID;
    return await dal.signUp(business);
}
var login = async (req) => {
    return await dal.login(req);
}
var getBusinessName = async (req) => {
    const business = new businessPoster.Business_Poster(req)
    return await dal.getBusinessName(business);
}
var getAllUsers = async () => {
    return await dal.getAllUsers();
}
module.exports = { signUp, login, getBusinessName, getAllUsers }


