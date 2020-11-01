import { CodeBare } from './codeBare';
import { Option } from './option';

export class Produit{
    private id: number;
    private nom: String;
    private description: String;
    private codeBar: CodeBare;
    private produitRef: Produit;
    private option: Option;

    constructor(){
        this.id = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.codeBar = undefined;
        this.produitRef = undefined;
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

    public getProduitRef(): Produit {
        return this.produitRef;
    }

    public setProduitRef(produitRef: Produit): void {
        this.produitRef = produitRef;
    }

    public getOption(): Option {
        return this.option;
    }

    public setOption(option: Option): void {
        this.option = option;
    }


}