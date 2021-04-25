export class Business {
    ID: number;
    userID: number;
    businessName: string;
    businessOwnerName: string;
    category: number;
    email: string;
    first_phone: string;
    second_phone: string;
    constructor(id?: number, uID?: number, bname?: string, bOwnerName?: string, category?: number, email?: string, f_phone?: string, s_phone?: string) {
        this.ID = 100;
        this.userID = uID;
        this.businessName = bname;
        this.businessOwnerName = bOwnerName;
        this.category = category;
        this.email = email;
        this.first_phone = f_phone;
        this.second_phone = s_phone;
    }
}