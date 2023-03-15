import {Views} from "./View"
import { User,UserProps } from '../models/User';


export class UserShow extends Views<User,UserProps>{
    template(): string {
        return`<div> 
            <h1>UserForm</h1>
            <div> User name: ${this.model.get('name')}</div>
            <div> User Age: ${this.model.get('age')}</div>
        </div>
        `
    }
}