import { Views } from "./Views"
type eventsMap={
    [key:string]:()=>void
}
export class UserForm extends Views{
    get template():string{
        return`
        <div>
            <h1>User Form</h1>
            <div>User name ${this.model.get('name')}</div>
            <div>User age ${this.model.get('age')}</div>
            <input/>
            <button class="setNewname">Change The Namw</button> 
            <button class="setRandomAge">Set Random age</button> 
            <button class="setSaveModel">Set save Model</button> 
        </div>
        `
    }
    eventsMap():eventsMap{
        return {
            "click:button":this.onButtonClick, 
            "click:.setRandomAge":this.onSetRandomAge, 
            "click:.setNewname":this.onSetNewName, 
            "click:.setSaveModel":this.onSaveModel, 
        }
    }
    onButtonClick():void{
        console.log('button get click')
    }
    onSetRandomAge=():void=>{
        const randomAge=Math.floor(Math.random()*100)
        this.model.set({age:randomAge})
    }
    onSetNewName=():void=>{
        const input =this.parent.querySelector('input')
        if(!input)throw new Error('element not found')
        const newName=input.value
        this.model.set({name:newName})
    }
    onSaveModel=():void=>{
        this.model.save()
    }
}