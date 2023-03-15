import { Model } from "../models/Model";

export abstract class Views<T extends Model<K>,K >{
    regions:{[key:string]:Element}={}
    constructor(
        public parent:Element,
        public model:T,
        ){
            this.bindModel()
        }
    // abstract eventsMap():{[key:string]:()=>void}
    eventsMap(){
        return {}
    }
    regionsMap():{[key:string]:string}{
        return {}
    }
    abstract template():string
    bindModel():void{
        this.model.on('change',()=>{
            this.render()
        })
    }
    mapRegion(fragment:DocumentFragment):void{
        const regionsMap=this.regionsMap()
        for (let key in regionsMap){
            const selector=regionsMap[key]
            this.regions[key]=fragment.querySelector(selector)
        }
    }
    render():void{
        this.parent.innerHTML='';
        const templateElement=document.createElement("template")
        templateElement.innerHTML=this.template()
        this.buildEvents(templateElement.content)
        this.mapRegion(templateElement.content)
        
        this.parent.append(templateElement.content)
    }
    buildEvents(fragment:DocumentFragment):void{
        const eventsMap=this.eventsMap()
        for(let eventKey in eventsMap){
            const [eventName,selector]=eventKey.split(':')
            fragment.querySelectorAll(selector).forEach(element=>{
                element.addEventListener(eventName,eventsMap[eventKey])
            })
        }
    }
}