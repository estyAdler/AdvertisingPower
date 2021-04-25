exports.Category = class Category {
    constructor(request) {
        this.ID = request.ID;
        this.categoryName = request.categoryName;
    }
}