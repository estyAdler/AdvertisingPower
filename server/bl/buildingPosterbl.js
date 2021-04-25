const building_poster = require("../models/building_poster");
const dal = require('../dal/buildingPosterdal')
var addNewPoster = async (req) => {
    const Poster = new building_poster.Building_Poster(req);
    return await dal.addNewPoster(Poster);
};
module.exports = { addNewPoster }