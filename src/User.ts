import { faker } from '@faker-js/faker';
import { IntMapeble } from './CustomMap';
export class User implements IntMapeble {
    name:string;
    location:{
        lat:number;
        lng:number;
    }
    constructor(){
    this.name=faker.name.firstName()
    this.location={
        lat:parseFloat(faker.address.latitude()),
        lng:parseFloat(faker.address.longitude())
     }
    }
    markerContent():string{
        return `
        <div>
        <h1> My name is ${this.name}<?h1>
        <p> this is my home Hallo !!!</p>
        </div>
        `
    }

}