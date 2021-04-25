exports.Business_Poster = class Business_Poster {
    constructor(request) {
        this.ID = request.ID;
        this.businessId = request.businessId;
        this.size = request.size;
        this.num_week = request.num_week;
        this.link = request.link;
        this.nation = request.nation;
        this.status = request.status;
        this.poster_name = request.poster_name
        this.language = request.language;
        this.rrow = request.rrow;
        this.col = request.col;
    }
}