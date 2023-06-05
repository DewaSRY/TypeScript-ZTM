import axios,{} from "axios";
interface HasId{
    id?:number
}
export interface Syncng<T>{
    fetch():Promise<T[]>
    save(data:T):Promise<void>
}

export class Sync<T extends HasId> implements Syncng<T>{
    private server:string=`http://localhost:3000/`
    rootUrl:string
    constructor(
         repoName:string
    ){
    this.rootUrl=this.server+repoName
     }
    async fetch():Promise<T[]>{
        const response=await axios.get(`${this.rootUrl}/`)
        return await response.data
    }
    async save(data:T):Promise<void>{
        const users= await this.fetch() 
        if(!users) throw new Error('failed to face data')
        if (!data.id)throw new Error("data should have some id")
        const usersId= users.find((user:T)=>user.id===data.id)
        if(usersId)await axios.put(`${this.rootUrl}/${data.id}`,data)
        if(!usersId)await axios.post(`${this.rootUrl}`,data)
    }

}