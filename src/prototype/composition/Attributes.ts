export interface Attribut<T>{
    get<K extends keyof T>(propName:K):T[K]
    set(update:T):void
    getAll:T
}
export class Attributes<T extends {}> implements Attribut<T>{
    constructor(
        private data:T,
    ){}
    get=<K extends keyof T>(propName:K):T[K]=>{
        return this.data[propName] 
    }
    set(update:T):void{
        Object.assign(this.data,update)
    }
    get getAll():T{
        return this.data
    }
}