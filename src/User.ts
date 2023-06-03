import { faker } from '@faker-js/faker';
export class User{
    name:string=faker.person.firstName()
    location:{lat:number,lng:number,
    }={
        lat:faker.location.latitude(),
        lng:faker.location.longitude(),
    }
    markerContent():string{
        return this.name
    }
}
