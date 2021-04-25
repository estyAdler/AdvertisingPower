exports.Building_Monthly_Statement = class Building_Monthly_Statement {
    constructor(request) {
        this.ID = request.ID;
        this.buildingId = request.buildingId;
        this.month = request.month;
        this.num_posters = request.num_posters;
        this.satisfaction = request.satisfaction;
    }
}