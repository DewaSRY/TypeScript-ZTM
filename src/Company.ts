import { faker } from '@faker-js/faker';

export class Company{
    companyName:string=faker.company.name()
    catchPhrase:string=faker.company.catchPhrase()
    location:{lat:number,lng:number,
    }={
        lat:faker.location.latitude(),
        lng:faker.location.longitude(),
    }
    markerContent():string{
        return `${this.companyName},${this.catchPhrase}`
    }
}