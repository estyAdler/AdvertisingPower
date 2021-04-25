exports.Business = class Business {
    constructor(request) {
        this.ID = request.ID;
        this.userID = request.userID;
        this.businessName = request.businessName;
        this.businessOwnerName = request.businessOwnerName;
        this.category = request.category;
        this.email = request.email;
        this.first_phone = request.first_phone;
        this.second_phone = request.second_phone;
    }
}