const Building = require("../models/builder");
const BoardPoster = require("../models/board_poster");
const dal = require("../dal/boardsdal");

var getPosters = async (req) => {
    const building = new Building.Builder(req);
    return await dal.getPosters(building);
}
var getBuilderPosters = async (req) => {
    const building = new Building.Builder(req);
    return await dal.getBuilderPosters(building);
}
var insertPosterToBoard = async (req) => {
    const bposter = new BoardPoster.Board_Poster(req);
    return await dal.insertPosterToBoard(bposter);
}
var getBoardByBID = async (req) => {
    const building = new Building.Builder(req);
    return await dal.getBoardByBID(building);
}
module.exports = { getPosters, getBuilderPosters, insertPosterToBoard, getBoardByBID }