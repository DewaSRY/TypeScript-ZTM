import { User } from "../prototype/User"
import { ModelProperty } from "../prototype/Mode"
type eventsMap={
    [key:string]:()=>void
}
export abstract class Views<T>{
    abstract template:string
    abstract eventsMap():eventsMap
    constructor(
        public parent:Element,
        public model:ModelProperty<T>
    ){
        this.model.on("change",()=>{
            this.render()
        })
    }
        bindEvents(fragment:DocumentFragment):void{
        const events=this.eventsMap()
        for(let eventKey in events){
            const [eventName,elementSelector]=eventKey.split(":")
            const allMatchEll= fragment.querySelectorAll(elementSelector)
            allMatchEll.forEach(element=>{
                element.addEventListener(eventName,events[eventKey])
            })
        }
    }
    render():void{
        this.parent.innerHTML=""
        const templateElement=document.createElement('template')
        templateElement.innerHTML=this.template
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}