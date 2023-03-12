import {  faker } from '@faker-js/faker';
import { IntMapeble } from './CustomMap';
export class Company implements IntMapeble {
    companyName?:string |number;
    catahPhrase:string;
    location:{
        lat:number;
        lng:number
    }
    constructor(){
        this.companyName=faker.company.name()
        this.catahPhrase=faker.company.catchPhrase()
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
        
    
    }
    markerContent():string{
        return `
        <div>
        <h1> ${this.companyName}<?h1>
        <h3> ${this.catahPhrase}</h3>
        </div>
        `
    }
}