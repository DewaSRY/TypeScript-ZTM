import { Views } from "./View"
import { User,UserProps } from "../models/User"
export class UserForm extends Views<User,UserProps>{
    eventsMap():{[key:string]:()=>void}{
        return {
            "click:.set-age":this.onAgechangeHeandle,
            "click:.set-name":this.onNamechangeHeandle,
            "click:.set-save":this.onSavechangeHeandle,
            "click:button":this.onButtonClick,
            "click:h1":this.onHeaderEnter
        }
    }
    onButtonClick=():void=>{
        // this.model.setRandomAge()
        console.log('Hi there,button get click')
    }
    onAgechangeHeandle=():void=>{
        this.model.setRandomAge()
    }
    onNamechangeHeandle=():void=>{
        const input =this.parent.querySelector('input')
        const newName=input.value
        this.model.set({name:newName})
    }
    onSavechangeHeandle=():void=>{
        const input =this.parent.querySelector('input')
        if(!input){
            return 
        }
        this.model.save()
    }
    onHeaderEnter():void{
        console.log('Hi there,header get enter')
    }
    template():string{
        return `<div>
            <h1>UserForm</h1>
            <div> User name: ${this.model.get('name')}</div>
            <div> User Age: ${this.model.get('age')}</div>
            <input placeholder="${this.model.get('name')}"/><br/>
            <button>Click mee</button><br/>
            <button class="set-name">input name</button><br/>
            <button class="set-age">Randeom age</button><br/> 
            <button class="set-save">save model </button><br/> 
        </div>
        `
    }
}
