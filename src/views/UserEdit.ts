import { Views } from "./View"
import { User,UserProps } from "../models/User"
import { UserShow } from './UserShow';
import { UserForm } from "./UserForm";


export class UserEdit extends Views<User,UserProps>{
    regionsMap(): { [key: string]: string; } {
        return{
            UserShow:".user-show",
            UserForm:".user-form"
        }
    }
    onRender():void{
        new UserShow(this.regions.UserShow,this.model).render()
        new UserForm(this.regions.UserForm,this.model).render()
    }
    template(): string {
        return`
        <div>
            <div class="user-form"></div>
            <div class="user-show"></div>
        </div>
        `
    }
}