export type Callback=()=>void
type Events={
    [key:string]:Callback[]
}
export interface Event{
    on(eventName:string,callback:Callback):void
    triggre(eventName:string):void
}
export class Eventing implements Event{
    events:Events={}
    on=(eventName:string,callback:Callback):void=>{
        const heandlers=this.events[eventName]||[]
        heandlers.push(callback)
        this.events[eventName]=heandlers
    }
    triggre=(eventName:string):void=>{
        const heandlers=this.events[eventName]
        if(!heandlers||heandlers.length===0)throw new Error('event name not found')
        heandlers.forEach(callBack=>callBack())
    }
}