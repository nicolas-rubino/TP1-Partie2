import { ClientType } from './clientType';
import { CodeBare } from './codeBare';
import { Droit } from './droit';

export class Client {
    private id: number;
    private type: ClientType;
    private adresse: string;
    private droits: Array<Droit>;
    private codeBare: CodeBare;
    
    constructor(){
        this.id = undefined;
        this.type = undefined;  
        this.adresse = undefined;
        this.droits = undefined;
        this.codeBare = undefined;
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getType(): ClientType {
        return this.type;
    }

    public setType(type: ClientType): void {
        this.type = type;
    }

    public getAdresse(): string {
        return this.adresse;
    }

    public setAdresse(adresse: string): void {
        this.adresse = adresse;
    }

    public getDroits(): Array<Droit> {
        return this.droits;
    }

    public setDroits(droit: Array<Droit>): void {
        this.droits = droit;
    }

    public getCodeBare(): CodeBare {
        return this.codeBare;
    }

    public setCodeBare(codeBare: CodeBare): void {
        this.codeBare = codeBare;
    }    
}