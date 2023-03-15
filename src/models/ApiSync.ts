import axios,{AxiosPromise} from 'axios';
interface IntHasId{
    id?:number
}

export class ApiSync<T extends IntHasId>{
    constructor(public rootUrl:string){}
    fetch=(id:number):AxiosPromise=>{
        return axios.get(`${this.rootUrl}$/${id}`)
    }
    save(data:T):AxiosPromise{
        const {id}=data
        if(id){
        //put
        return axios.put(`${this.rootUrl}$/{id}`,data)
        }else{
        //post
        return axios.post(`${this.rootUrl}`,data)
        }
    }
}