exports.Board_Poster = class Board_Poster {
    constructor(request) {
        this.ID = request.ID;
        this.buildingId = request.buildingId;
        this.num_week = request.num_week;
        this.link = request.link;
        this.size = request.size;
        this.rrow = request.rrow;
        this.col = request.col
    }
};

