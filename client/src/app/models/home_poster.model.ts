export class Home_Poster {
    ID: number;
    link: string;
    size: number;
    rrow: number;
    col: number;
    constructor(id?: number, link?: string, size?: number, rrow?: number, col?: number) {
        this.ID = id;
        this.link = link;
        this.size = size;
        this.col = col;
        this.rrow = rrow;
    }
}