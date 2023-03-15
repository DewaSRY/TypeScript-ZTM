import axios,{AxiosResponse} from "axios";
import { User,UserProps } from "./User";
import { Events } from './Events';

export class Collection<T,K>{
    models:T[]=[];
    events:Events=new Events()
    constructor(
        public rooUrl:string,
        public deserialize:(json:K)=>T
        ){}
    get on() {
        return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }
    fetch():void{
        axios.get(this.rooUrl)
        .then(
            (response:AxiosResponse)=>
            response.data.forEach(
                (value:K)=>{
                const deserializeValue=this.deserialize(value)
                this.models.push(deserializeValue)
        }))
        this.trigger('change')
    }
}