export class Board_poster {
    ID: number;
    buildingId: number;
    num_week: number;
    link: string;
    size: number;
    rrow: number
    col: number
    constructor(id?: number, bId?: number, weeks?: number, link?: string, size?: number, row?: number, col?: number) {
        this.ID = id;
        this.buildingId = bId;
        this.num_week = weeks;
        this.link = link;
        this.size = size;
        this.rrow = row;
        this.col = col
    }
}