const Building = require("../models/builder");
const buidingCategory = require("../models/building_categories");
const dal = require("../dal/buildingdal");
const categorydal = require("../dal/categorydal");
const Building_monthly_statement = require("../models/building_monthly_statement");
const citydal = require("../dal/citydal");

var signUp = async (req) => {
    const building = new Building.Builder(req);
    const idcity = await citydal.getCityByName(building.city)
    building.city = idcity.ID;
    return await dal.signUp(building);
}
var monthlyStatement = async (req) => {
    const building_monthly_statement = new Building_monthly_statement.Building_Monthly_Statement(req);
    return await dal.monthlyStatement(building_monthly_statement);
}
var addData = async (req) => {
    const building = new Building.Builder(req);
    return await dal.addData(building);
}
var login = async (req) => {
    return await dal.login(req);
}
var insertBuildingCategory = async (req) => {
    const Building_Categories = new buidingCategory.Building_Categories(req);
    const idcat = await categorydal.get(Building_Categories.category)
    Building_Categories.category = idcat.ID;
    return await dal.insertBuildingCategory(Building_Categories);
}
var getAllUsers = async () => {
    return await dal.getAllUsers();
}
var changeStatus = async (req) => {
    const building = new Building.Builder(req);
    return await dal.changeStatus(building);
}
var getNewBuildings = async () => {
    return await dal.getNewBuildings();
}
var updateNumWeekOrder = async (req) => {
    const building = new Building.Builder(req);
    return await dal.updateNumWeekOrder(building);
}

module.exports = { insertBuildingCategory, updateNumWeekOrder, signUp, addData, login, monthlyStatement, getAllUsers, changeStatus, getNewBuildings }