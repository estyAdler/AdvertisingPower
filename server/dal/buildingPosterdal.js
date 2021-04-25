var Connection = require("../connectMySql");
var addNewPoster = (p) => {
    obj = {}
    return Connection
        .executeStatement(`INSERT INTO tbl_build_poster (buildingId,type,link,poster_name,impor) 
        VALUES ('${p.buildingId}','${p.type}','${p.link}','${p.poster_name}','${p.impor}')`)
        .then((posterInfo) => {
            return posterInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
module.exports = { addNewPoster }