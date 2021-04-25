exports.Building_Poster = class Building_Poster {
    constructor(request) {
        this.ID = request.ID;
        this.buildingId = request.buildingId;
        this.type = request.type;
        this.link = request.link;
        this.poster_name = request.poster_name;
        this.impor = request.impor
        this.rrow = request.rrow;
        this.col = request.col;
        this.size = request.size;
    }
}