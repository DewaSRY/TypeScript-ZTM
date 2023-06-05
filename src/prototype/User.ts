import { Model } from "./Mode";
interface UserProps {
    id?:number;
    name?:string;
    age?:number;
}

export class User extends Model<UserProps>{
    setRandomAge():void{
        const randomAge=Math.floor(Math.random()*100)
        this.set({age:randomAge})
    }
}