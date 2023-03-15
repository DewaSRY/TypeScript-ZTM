import { Events } from './Events';
import { ApiSync } from './ApiSync';
import { Attributs } from './Attributes';
import { Model } from './Model';
import { Collection } from './Collection';
export interface UserProps{
    id?:number,
    name?:string,
    age?:number,
}
export interface UserAttribut{
    name?:string,
    age?:number,
}
const rootUrl='http://localhost:3000/users'
export class User extends Model<UserProps>{
    static buildUser(attrs:UserAttribut):User{
        return new User(
            new Attributs<UserProps>(attrs),
            new Events(),
            new ApiSync<UserProps>(rootUrl)
        )
    }
    static BuildCollection():Collection<User,UserProps>{
        return new Collection<User,UserProps>(
            rootUrl,
            (json:UserProps)=>User.buildUser(json)
            )
    }
    setRandomAge():void{
        const age =Math.floor(Math.random()*100)
        this.set({age:age})
    }
}