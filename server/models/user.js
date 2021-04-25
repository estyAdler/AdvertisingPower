exports.User = class User {
    constructor(request) {
        this.ID = request.ID;
        this.user_name = request.user_name;
        this.password = request.password;
        this.status = request.status;
    }
};

