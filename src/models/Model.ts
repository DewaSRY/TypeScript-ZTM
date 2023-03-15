import { AxiosPromise,AxiosResponse } from "axios";
interface IntAttributs<T>{
    set(value:T):void
    getAll():T
    get<K extends keyof T>(key:K):T[K]
}
interface IntSync<T>{
    fetch(id:number):AxiosPromise
    save(data:T):AxiosPromise
}
interface IntEvents{
    on(eventName:string,Callback:()=>void):void;
    trigger(eventName:string):void
}
interface IntHaseId{
    id?:number
}
export class Model<T extends IntHaseId>{
    constructor(
        private attributes:IntAttributs<T>,
        private events:IntEvents,
        private sync:IntSync<T>
    ){}
    get on(){
        return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }
    get get(){
        return this.attributes.get
    }
    set(update:T):void{
        if(!update)return
        this.attributes.set(update)
        this.events.trigger('change')
    }
    fetch():void{
        const id=this.get('id')
        if(typeof id !== "number"){
            throw new Error('Cennot fetch without an id')
        }
        this.sync.fetch(id).then((response:AxiosResponse):void=>{
            this.set(response.data)
        })
    }
    save():void{
        console.log(this.attributes.getAll())
        this.sync.save(
            this.attributes.getAll()
            ).then((response:AxiosResponse):void=>{
            this.trigger("change")
        }).catch((err:Error)=>{
            this.trigger(`${err}Thiss:`)
        })
    }
}