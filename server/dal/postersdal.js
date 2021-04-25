const business_poster = require("../models/business_poster");
const building_poster = require("../models/building_poster");
const email = require("../email");
var Connection = require("../connectMySql");

var getSizePosters = () => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_size_poster `)
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
var getSizeByName = (sizeName) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_size_poster where size ='${sizeName}'`)
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
var getWaitPosters = () => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_business_poster where status=0 `)
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
var insertCitiesPosters = (cp) => {
    console.log("1111!");
    obj = {}
    return Connection
        .executeStatement(`INSERT INTO tbl_city_poster(id_poster,city) 
         VALUES ('${cp.id_poster}','${cp.city}')`)
        .then((cityInfo) => {
            return cityInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var addNewPoster = async (p) => {
    console.log("posterdal")
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_business_poster where businessId ='${p.businessId}' and link='${p.link}' `)
        .then((posterInfo) => {
            if (posterInfo.length > 0) {
                return Connection.executeStatement(`update tbl_business_poster set size='${p.size}',num_week='${p.num_week}',nation='${p.nation}',language='${p.language}',rrow='${p.rrow}',col='${p.col}'
                    where ID='${posterInfo[0].ID}'`)
                    .then((posterInfo) => {

                        return posterInfo;
                    }
                    ).catch(err => {
                        console.log(err)
                        return err
                    })
            }
            else {
                return Connection.executeStatement(`INSERT INTO tbl_business_poster (businessId,size,num_week,link,nation,poster_name,language,rrow,col) 
        VALUES ('${p.businessId}','${p.size}','${p.num_week}','${p.link}','${p.nation}','${p.poster_name}','${p.language}','${p.rrow}','${p.col}')`)
                    .then((posterInfo) => {
                        console.log(posterInfo)
                        return posterInfo;
                    }
                    ).catch(err => {
                        console.log(err)
                        return err
                    })
            }
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}

var updateStatus = (p) => {
    obj = {}
    return Connection
        .executeStatement(`update tbl_business_poster set status='${p.status}' where ID='${p.ID}'`)
        .then((Info) => {
            Connection.executeStatement(`select * from tbl_business_owner where businessName = '${p.businessId}'`).
                then((Infob) => {
                    if (Infob.length > 0) {
                        console.log("email", Infob[0].email)
                        // email.getData(Infob[0].email, p.status);
                        email.getData('pro6709601@gmail.com', p.status);
                    }
                    else {
                        return null
                    }
                }
                )
            return Info;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var getPostersByBusinessID = (b) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_business_poster where businessId ='${b.ID}' `)
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
var changePrice = (sp) => {
    obj = {}
    return Connection
        .executeStatement(`update tbl_size_poster set price='${sp.price}' where ID='${sp.ID}'`)
        .then((Info) => {
            return Info;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var decreaseWeek = () => {
    obj = {}
    return Connection
        .executeStatement(`update tbl_business_poster set num_week=num_week-1 where ID>0 and num_week>0`)
        .then((Info) => {
            return Info;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
module.exports = { getWaitPosters, getSizePosters, decreaseWeek, insertCitiesPosters, addNewPoster, getSizeByName, updateStatus, getPostersByBusinessID, changePrice }