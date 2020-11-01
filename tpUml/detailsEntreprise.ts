
export class DetailsEntreprise{
    private rue: String;
    private ville: String;
    private province: String;
    
    constructor(){
        this.rue = undefined;
        this.ville = undefined;
        this.province = undefined;
    }
    
    public getRue(): String {
        return this.rue;
    }

    public setRue(rue: String): void {
        this.rue = rue;
    }

    public getVille(): String {
        return this.ville;
    }

    public setVille(ville: String): void {
        this.ville = ville;
    }

    public getProvince(): String {
        return this.province;
    }

    public setProvince(province: String): void {
        this.province = province;
    }

}