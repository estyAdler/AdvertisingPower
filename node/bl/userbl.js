const User = require("../models/user");
const dal = require("../dal/userdal");

var login = async (req) => {
    const user = new User.User(req);
    return await dal.getUserByLogin(user);
};
var register = async (req) => {
    const user = new User.User(req);
    return await dal.insertUser(user);
}
module.exports = { login, register }


