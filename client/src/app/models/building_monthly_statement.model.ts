import { NumberInput } from '@angular/cdk/coercion';

export class Building_Monthly_Statement {
    ID: number;
    buildingId: number;
    month: string;
    num_posters: number;
    satisfaction: number;
    constructor(id?: number, bId?: number, month?: string, num_posters?: number, satisfaction?: number) {
        this.ID = id;
        this.buildingId = bId;
        this.month = month;
        this.num_posters = num_posters;
        this.satisfaction = satisfaction
    }
}