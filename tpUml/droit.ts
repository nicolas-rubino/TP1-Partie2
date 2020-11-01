import { Client } from './client';
import { DroitType } from './DroitType';

export class Droit {
    private id: number;
    private type: DroitType
    private dateDebut: Date;
    private dateFin: Date;

    constructor(){
        this.id = undefined;
        this.type = undefined;
        this.dateDebut = undefined;
        this.dateFin = undefined;
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getType(): DroitType {
        return this.type;
    }

    public setType(type: DroitType): void {
        this.type = type;
    }

    public getDateDebut(): Date {
        return this.dateDebut;
    }

    public setDateDebut(dateDebut: Date): void {
        this.dateDebut = dateDebut;
    }

    public getDateFin(): Date {
        return this.dateFin;
    }

    public setDateFin(dateFin: Date): void {
        this.dateFin = dateFin;
    }
}