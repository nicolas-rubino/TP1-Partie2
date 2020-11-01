import { Client } from './client';
import { DetailsIndividu } from './detailsIndividu';

export class Individu extends Client {
    private prenom: String;
    private nom: String;
    private email: String;
    private details: DetailsIndividu;

    constructor(){
        super();
        this.prenom = undefined;
        this.nom = undefined;
        this.email = undefined;
    }

    public getPrenom(): String {
        return this.prenom;
    }

    public setPrenom(prenom: String): void {
        this.prenom = prenom;
    }

    public getNom(): String {
        return this.nom;
    }

    public setNom(nom: String): void {
        this.nom = nom;
    }

    public getEmail(): String {
        return this.email;
    }

    public setEmail(email: String): void {
        this.email = email;
    }

    public getDetails(): DetailsIndividu {
        return this.details;
    }

    public setDetails(details: DetailsIndividu): void {
        this.details = details;
    }


}