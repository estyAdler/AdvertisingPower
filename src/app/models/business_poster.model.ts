export class Business_Poster {
    ID: number;
    businessId: number;
    size: string;
    num_week: number;
    link: string;
    nation: number;
    status: number
    poster_name: string
    language: string
    rrow: number
    col: number
    constructor(id?: number, bId?: number, size?: string, weeks?: number, link?: string, nation?: number, status?: number, poster_name?: string, language?: string, row?: number, col?: number) {
        this.ID = id;
        this.businessId = bId;
        this.size = size;
        this.num_week = weeks;
        this.link = link;
        this.nation = nation;
        this.status = status;
        this.poster_name = poster_name
        this.language = language;
        this.rrow = row;
        this.col = col
    }
}