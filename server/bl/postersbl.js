const poster = require("../models/business_poster")
const citiesPosters = require("../models/cities_poster");
const citydal = require("../dal/citydal")
const dal = require("../dal/postersdal");
const business = require("../models/business");
const sizePoster = require("../models/size_poster");
var addNewPoster = async (req) => {
    const Poster = new poster.Business_Poster(req);
    const idsize = await dal.getSizeByName(Poster.size)
    Poster.size = idsize.ID;
    const newPoster = await dal.addNewPoster(Poster);
    console.log("posterbl", newPoster);
    return newPoster;
};
var getSizePosters = async () => {
    return await dal.getSizePosters();
}
var getWaitPosters = async () => {
    return await dal.getWaitPosters();
}
var insertCitiesPosters = async (req) => {
    const CitiesPosters = new citiesPosters.Cities_Poster(req);
    const idcity = await citydal.getCityByName(CitiesPosters.city)
    CitiesPosters.city = idcity.ID;
    return await dal.insertCitiesPosters(CitiesPosters);
}
var updateStatus = async (req) => {
    const Poster = new poster.Business_Poster(req);
    return await dal.updateStatus(Poster);
}
var getPostersByBusinessID = async (req) => {
    const Business = new business.Business(req);
    return await dal.getPostersByBusinessID(Business);
}
var changePrice = async (req) => {
    const SizePoster = new sizePoster.Size_Poster(req);
    return await dal.changePrice(SizePoster);
}
var decreaseWeek = async () => {
    return await dal.decreaseWeek();
}
module.exports = { decreaseWeek, getSizePosters, addNewPoster, getWaitPosters, insertCitiesPosters, updateStatus, getPostersByBusinessID, changePrice }


