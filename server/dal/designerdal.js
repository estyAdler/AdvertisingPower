
var Connection = require("../connectMySql");
var addNewPoster = (p) => {
    obj = {}
    return Connection.executeStatement(`INSERT INTO tbl_home_posters (link) 
        VALUES ('${p.link}')`)
        .then((posterInfo) => {
            return posterInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var getPosters = () => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_home_posters `)
        .then((Info) => {
            if (Info.length > 0) {
                return Info
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
module.exports = { addNewPoster, getPosters }