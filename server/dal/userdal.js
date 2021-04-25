var User = require("../models/user");
var Connection = require("../connectMySql");
const { NULL } = require("mysql2/lib/constants/types");


var getUserByLogin = (u) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_users where user_name ='${u.user_name}' and password='${u.password}'  `)
        .then((userInfo) => {
            if (userInfo.length > 0) {
                return userInfo[0]
            }
            else {
                return null
            }
        }
        ).catch(err => {
            console.log(err);
            return err;
        })
}

var insertUser = (u) => {
    obj = {}
    return Connection
        .executeStatement(`INSERT INTO tbl_users(user_name,password,status)
          VALUES ('${u.user_name}', '${u.password}','${u.status}')`)
        .then((userInfo) => {
            return userInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
module.exports = { getUserByLogin, insertUser }