export class Building_Categories {
    ID: number;
    buildingId: number;
    category: string;
    constructor(id?: number, bId?: number, category?: string) {
        this.ID = id;
        this.buildingId = bId;
        this.category = category;
    }
}