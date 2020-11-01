import { Droit } from './droit';
import { Produit } from './produit';

export class DroitProduit {
    private produit: Produit;
    private droit: Droit; 

    constructor(){
        this.produit= undefined;
        this.droit= undefined;
    }

    public getProduit(): Produit {
        return this.produit;
    }

    public setProduit(produit: Produit): void {
        this.produit = produit;
    }

    public getDroit(): Droit {
        return this.droit;
    }

    public setDroit(droit: Droit): void {
        this.droit = droit;
    }
}