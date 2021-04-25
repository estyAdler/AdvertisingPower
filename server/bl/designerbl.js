const designerDal = require("../dal/designerdal");
const home_poster = require("../models/home_poster");
var addNewPoster = async (req) => {
    const Poster = new home_poster.Home_Poster(req)
    return await designerDal.addNewPoster(Poster);
};
var getPosters = async () => {
    return await designerDal.getPosters();
};
module.exports = { addNewPoster, getPosters }