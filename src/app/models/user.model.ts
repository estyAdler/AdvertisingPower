export class User {
    ID: number;
    user_name: string;
    password: string;
    status: number;
    constructor(id?: number, name?: string, password?: string, status?: number) {
        this.ID = 100;
        this.user_name = name;
        this.password = password;
        this.status = status;
        if (status == undefined)
            this.status = 1;

    }
}