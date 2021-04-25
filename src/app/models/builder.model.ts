export class Builder {
    ID: number;
    userID: number;
    name: string;
    first_phone: string;
    second_phone: string;
    email: string;
    street: string;
    Building_number: number;
    city: string;
    Number_tenants: number;
    nation: number;
    language: number;
    a25: number;
    a25_40: number;
    a40_60: number;
    a60: number;
    status: string;
    num_week_order: number;
    constructor(id?: number, uID?: number, name?: string, email?: string, f_phone?: string, s_phone?: string, street?: string, buildingNum?: number,
        city?: string, num_tenants?: number, nation?: number, lang?: number, a25?: number, a25_40?: number, a40_60?: number, a60?: number, status?: string, num?: number) {
        this.ID = 100;
        this.userID = uID;
        this.name = name;
        this.first_phone = f_phone;
        this.second_phone = s_phone;
        this.email = email;
        this.street = street;
        this.Building_number = buildingNum;
        this.language = lang;
        this.nation = nation;
        this.Number_tenants = num_tenants;
        this.city = city;
        this.a25 = a25;
        this.a25_40 = a25_40;
        this.a40_60 = a40_60;
        this.a60 = a60;
        this.status = status;
        this.num_week_order = num
    }
}