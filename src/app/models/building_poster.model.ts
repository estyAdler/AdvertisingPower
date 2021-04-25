export class Building_Poster {
    ID: number;
    buildingId: number;
    type: number;
    link: string;
    poster_name: string;
    impor: number;
    rrow: number;
    col: number;
    size: number;
    constructor(id?: number, bId?: number, type?: number, link?: string, poster_name?: string, imp?: number, rrow?: number, col?: number, size?: number) {
        this.ID = id;
        this.buildingId = bId;
        this.type = type;
        this.link = link;
        this.poster_name = poster_name;
        this.impor = imp;
        this.rrow = rrow;
        this.col = col;
        this.size = size
    }
}