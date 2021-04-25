var Connection = require("../connectMySql");
var getAllCities = () => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_city order by city`)
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
var getCityByName = (cityName) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_city where city ='${cityName}'`)
        .then((idInfo) => {
            if (idInfo.length > 0) {
                return idInfo[0]
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
module.exports = { getAllCities, getCityByName }