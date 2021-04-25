var Connection = require("../connectMySql");

var signUp = (b) => {
    obj = {}
    return Connection
        .executeStatement(`INSERT INTO tbl_house_committee (userID,name,first_phone,second_phone,email,street,Building_number,city,Number_tenants,status) 
        VALUES ('${b.userID}','${b.name}','${b.first_phone}','${b.second_phone}','${b.email}','${b.street}','${b.Building_number}','${b.city}','${b.Number_tenants}','${b.status}')`)
        .then((buildingInfo) => {
            Connection.executeStatement(`update tbl_house_committee
            set city =1
            where ID='${b.city}'`).
                then((Infob) => {
                    return Infob;
                }
                )
            return buildingInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var addData = (b) => {
    obj = {}
    return Connection
        .executeStatement(`update tbl_house_committee 
        set nation='${b.nation}' ,language='${b.language}',a25='${b.a25}',a25_40='${b.a25_40}',
        a40_60='${b.a40_60}',a60='${b.a60}'
        where userID='${b.userID}'`)
        .then((buildingInfo) => {
            return buildingInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var insertBuildingCategory = (bc) => {
    obj = {}
    return Connection
        .executeStatement(`INSERT INTO tbl_building_categories(buildingId,category) 
         VALUES ('${bc.buildingId}','${bc.category}')`)
        .then((userInfo) => {
            return userInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var monthlyStatement = (ms) => {
    obj = {}
    return Connection
        .executeStatement(`INSERT INTO tbl_build_month(buildingId,month,num_posters,satisfaction) 
         VALUES ('${ms.buildingId}','${ms.month}','${ms.num_posters}','${ms.satisfaction}')`)
        .then((userInfo) => {
            return userInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var login = (userID) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_house_committee where userID ='${userID}' `)
        .then((buildingInfo) => {
            if (buildingInfo.length > 0) {
                return buildingInfo[0]
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
var getAllUsers = () => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_house_committee`)
        .then((buildInfo) => {
            if (buildInfo.length > 0) {
                return buildInfo
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
var updateNumWeekOrder = (b) => {
    return Connection
        .executeStatement(`update tbl_house_committee 
        set num_week_order='${b.num_week_order}' 
        where userID='${b.userID}'`)
        .then((buildingInfo) => {
            return buildingInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var changeStatus = (b) => {
    obj = {}
    return Connection
        .executeStatement(`update tbl_house_committee 
        set status='${b.status}' 
        where userID='${b.userID}'`)
        .then((buildingInfo) => {
            return buildingInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var getNewBuildings = () => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_house_committee where status='לא טופל'`)
        .then((buildInfo) => {
            if (buildInfo.length > 0) {
                return buildInfo
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
module.exports = { insertBuildingCategory, signUp, addData, login, monthlyStatement, updateNumWeekOrder, getAllUsers, changeStatus, getNewBuildings }