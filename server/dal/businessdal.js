var Connection = require("../connectMySql");

var signUp = (b) => {
    obj = {}
    return Connection
        .executeStatement(`INSERT INTO tbl_business_owner (userID,businessName,businessOwnerName,category,email,first_phone,second_phone)
          VALUES ('${b.userID}','${b.businessName}','${b.businessOwnerName}','${b.category}','${b.email}','${b.first_phone}','${b.second_phone}')`)
        .then((businessInfo) => {
            return businessInfo;
        }
        ).catch(err => {
            console.log(err)
            return err
        })
}
var login = (userID) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_business_owner where userID ='${userID}' `)
        .then((businessInfo) => {
            if (businessInfo.length > 0) {
                return businessInfo[0]
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
var getBusinessName = (b) => {
    obj = {}
    return Connection
        .executeStatement(`select * from tbl_business_owner where ID ='${b.businessId}' `)
        .then((businessInfo) => {
            if (businessInfo.length > 0) {
                return businessInfo[0]
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
        .executeStatement(`select * from tbl_business_owner`)
        .then((businessInfo) => {
            if (businessInfo.length > 0) {
                return businessInfo
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
module.exports = { signUp, login, getBusinessName, getAllUsers }