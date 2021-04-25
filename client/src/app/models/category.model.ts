export class Category {
    ID: number;
    categoryName: string
    constructor(id?: number, name?: string) {
        this.ID = id;
        this.categoryName = name;
    }
}