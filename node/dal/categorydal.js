var Connection = require("../connectMySql");

var get = (categoryName) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_categories where categoryName ='${categoryName}'`)
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
var getAllCategories = () => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_categories order by categoryName`)
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
var getCategoryName = (b) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_categories where ID ='${b.category}'`)
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
module.exports = { getAllCategories, get, getCategoryName }