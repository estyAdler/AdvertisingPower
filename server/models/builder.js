exports.Builder = class Builder {
    constructor(request) {
        this.ID = request.ID;
        this.userID = request.userID;
        this.name = request.name;
        this.first_phone = request.first_phone;
        this.second_phone = request.second_phone;
        this.email = request.email;
        this.street = request.street;
        this.Building_number = request.Building_number;
        this.language = request.language;
        this.nation = request.nation;
        this.Number_tenants = request.Number_tenants;
        this.city = request.city;
        this.a25 = request.a25;
        this.a25_40 = request.a25_40;
        this.a40_60 = request.a40_60;
        this.a60 = request.a60;
        this.status = request.status;
        this.num_week_order = request.num_week_order
    }
}