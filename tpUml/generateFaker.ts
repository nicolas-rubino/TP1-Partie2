import { Client } from "./client";
import { ClientType } from './clientType';
import { CodeBare } from './codeBare';
import { Droit } from './droit';
import { DroitProduit } from './droitProduit';
import { DroitType } from './DroitType';
import { Entreprise } from './entreprise';
import { Individu } from './individu';
import { Produit } from './produit';

const faker = require('faker');
const fs = require('fs');


let webServ = generateRandomData();
fs.writeFileSync("data.json", JSON.stringify(webServ, null, '\t'));

function generateRandomData() {
    let tabClients = new Array();
    let tabIndividu = new Array();
    let tabEntreprise = new Array();
    let tabDroitProduit = new Array();

    for (let index = 1; index <= 10; index++) {
        let client = new Client();
        client.setId(index);
        client.setAdresse(faker.address.streetAddress());
        client.setDroits(generateDroits(index));
        client.setCodeBare(new CodeBare);
        
        if (Math.random() >= 0.5) {
            client.setType(ClientType.individu);
            tabIndividu.push(generateClientIndividu(client));
        }
        else {
            client.setType(ClientType.entreprise);
            tabEntreprise.push(generateClientEntreprise(client));
        }
        tabClients.push(client);
    }

    for (let index = 0; index < tabClients.length; index++) {
        let compteurId = 0;
        for(let index2 = 0 ; index2 < tabClients[index].getDroits().length; index2++){
            let produit = generateProduit(compteurId);
            let dp = new DroitProduit();
            dp.setDroit(tabClients[index].getDroits()[index2]);
            dp.setProduit(produit);
            tabDroitProduit.push(dp);
            compteurId++;
        }
    }
    return { "Clients : ": tabClients,"Individus : ":tabIndividu,"Entreprises : ":tabEntreprise,"Relation Droit-Produit : ":tabDroitProduit}
}

function generateClientIndividu(client:Client){
    let individu = new Individu();
    individu.setId(client.getId());
    individu.setAdresse(client.getAdresse());
    individu.setDroits(client.getDroits());
    individu.setCodeBare(client.getCodeBare());
    individu.setType(client.getType());
    individu.setPrenom(faker.name.firstName());
    individu.setNom(faker.name.lastName());
    individu.setEmail(faker.internet.email());
    return individu;
}

function generateClientEntreprise(client:Client) {
    let individu = new Entreprise();
    individu.setId(client.getId());
    individu.setAdresse(client.getAdresse());
    individu.setDroits(client.getDroits());
    individu.setCodeBare(client.getCodeBare());
    individu.setType(client.getType());
    individu.setPhone(faker.phone.phoneNumber());
    individu.setNom(faker.name.lastName());
    individu.setFax(faker.phone.phoneNumber());
    return individu;
}

function generateDroits(id:number){
    let listDroit : Array<Droit> = new Array();
    for (let index = (id+10); index < (id+25) ; index+=5) {
        let droit = new Droit();
        droit.setId(index);
        droit.setDateDebut(faker.date.past());
        droit.setDateFin(faker.date.future());
        let tempRandom = Math.random();
        if (tempRandom <= 0.33) {
            droit.setType(DroitType.Droit_01);
        }
        else if (tempRandom <= 0.66) {
            droit.setType(DroitType.Droit_02);
        }
        else{
            droit.setType(DroitType.Droit_03);
        }
        listDroit.push(droit);
    }   
    return listDroit;
}

function generateProduit(id:number){
    let prod = new Produit();
    prod.setId(id);
    prod.setNom(faker.commerce.productName());
    prod.setDescription(faker.commerce.productDescription());
    prod.setCodeBar(new CodeBare);
    return prod;
}

