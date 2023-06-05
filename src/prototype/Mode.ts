import { Eventing,Event } from "./composition/Event";
import { Sync ,Syncng} from "./composition/Sync";
import { Attributes ,Attribut} from "./composition/Attributes";

export  interface ModelProperty<T>{
     events:Event;
     sync:Syncng<T>;
     attr:Attribut<T>
}
interface HasId {
    id?:number;
}

export class Model<T extends HasId> implements ModelProperty<T>{
    public events:Event=new Eventing();
    public sync:Syncng<T>
    public attr:Attribut<T>
    constructor(reppoNam:string ,userData:T){
        this.sync=new Sync<T>(reppoNam);
        this.attr=new Attributes<T>(userData)
    }
    get on(){
        return  this.events.on
    }
    get tigger(){
        return this.events.triggre
    }
    get get(){
        return this.attr.get
    }
    set(update:T):void{
        this.attr.set(update)
        this.events.triggre('change')
    }
    async fetch():Promise<void>{
        const id=this.attr.get('id')
        if(typeof id !=="number")throw new Error('id not found')
        const userArry=await this.sync.fetch()
        const [matchUser]=userArry.filter((user)=>user.id===id)
        this.attr.set(matchUser)
    }
    async save():Promise<void>{
        const getAttrData=this.attr.getAll
        await this.sync.save(getAttrData)
        this.events.triggre('save')
    }
}