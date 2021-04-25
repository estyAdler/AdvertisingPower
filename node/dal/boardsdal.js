var Connection = require("../connectMySql");
var getPosters = (b) => {
    obj = {}
    return Connection
        .executeStatement(
            `select * from tbl_business_poster as bp
            join tbl_business_owner as b
            on b.ID=bp.businessId
            where bp.num_week>0 
            and bp.status=1
            and 0< (select cp.city from tbl_city_poster cp where bp.ID=cp.id_poster and cp.city ='${b.city}')
            and bp.language ='${b.language}'
            and bp.nation='${b.nation}'
           and b.category in (select bc.category from tbl_building_categories bc where bc.buildingId='${b.ID}')`)
        .then((postersInfo) => {
            if (postersInfo.length > 0) {
                return postersInfo
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
var insertPosterToBoard = (b) => {
    return Connection
        .executeStatement(`INSERT INTO tbl_boards (num_week,buildingId,link,size,rrow,col) 
    VALUES ('${b.num_week}','${b.buildingId}','${b.link}','${b.size}','${b.rrow}','${b.col}')`)
        .then((bposterInfo) => {
            return bposterInfo
        }
        ).catch(err => {
            console.log("eerror", err);
            return err;
        })
}
var getBuilderPosters = (b) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_build_poster where buildingId='${b.ID}'`)
        .then((postersInfo) => {
            if (postersInfo.length > 0) {
                return postersInfo
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
var getBoardByBID = (b) => {
    //מקבל את התאריך הנוכחי
    let now = new Date();
    //מקבל את התאריך של 01/01 של השנה הנוכחית
    let onejan = new Date(now.getFullYear(), 0, 1);
    //מחשב את מספר השבוע בשנה זו, ומוסיף למספר זה את השנה הנוכחית
    let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000)
     + onejan.getDay() + 1) / 7) + (now.getFullYear()) * 100;
    return Connection
        .executeStatement(`select * from tbl_boards where buildingId='${b.ID}'
         and num_week='${week}'`)
        .then((postersInfo) => {
            if (postersInfo.length > 0) {
                return postersInfo
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
module.exports = { getPosters, getBuilderPosters, insertPosterToBoard, getBoardByBID }