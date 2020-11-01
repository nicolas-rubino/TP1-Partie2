import { Client } from './client';
import { Contact } from './contact';
import { DetailsEntreprise } from './detailsEntreprise';


export class Entreprise extends Client{
    private nom: string;
    private phone: string;
    private fax: string;
    private contact: Contact;
    private details: DetailsEntreprise;

    constructor(){
        super();
        this.nom = undefined;
        this.phone = undefined;
        this.fax = undefined;
        this.contact = undefined;
        this.details = undefined;
    }
    
    public getNom(): string {
        return this.nom;
    }

    public setNom(nom: string): void {
        this.nom = nom;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public getFax(): string {
        return this.fax;
    }

    public setFax(fax: string): void {
        this.fax = fax;
    }

    public getContact(): Contact {
        return this.contact;
    }

    public setContact(contact: Contact): void {
        this.contact = contact;
    }

    public getDetails(): DetailsEntreprise {
        return this.details;
    }

    public setDetails(details: DetailsEntreprise): void {
        this.details = details;
    }


}