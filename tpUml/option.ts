import { CodeBare } from './codeBare';

export class Option {
    private id: number;
    private nom: String; 
    private description: String;
    private codeBar: CodeBare;

    constructor(){
        this.id = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.codeBar = undefined;
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNom(): String {
        return this.nom;
    }

    public setNom(nom: String): void {
        this.nom = nom;
    }

    public getDescription(): String {
        return this.description;
    }

    public setDescription(description: String): void {
        this.description = description;
    }

    public getCodeBar(): CodeBare {
        return this.codeBar;
    }

    public setCodeBar(codeBar: CodeBare): void {
        this.codeBar = codeBar;
    }


}