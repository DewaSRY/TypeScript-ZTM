import { NumbersCollection } from "./Number.Collection"

interface IntSortable{
    length:number;
    compare(leftIndex:number,rightIndex:number):boolean
    swap(leftIndex:number,rightIndex:number):void
}
export class Sorter{
    collection:number[] | string
    constructor(collection:number[] | string ){
        this.collection=collection
    }
    sort():number[] | string  {
        const {length}=this.collection
        for(let i=0; i<length;i++){
            // console.log("i",i)
            for (let j=0; j<length-i-1;j++){
            // console.log("j",j)
            if(this.collection instanceof Array){
                if(this.collection[j]> this.collection[j+1]){
                    const temp=this.collection[j]
                    this.collection[j]=this.collection[j+1]
                    this.collection[j+1]=temp
                    }
                }
            }if(typeof this.collection ==='string' ){
                
            }
        }
        return this.collection
    }
}  
export class Sorter_2{
    constructor(public collection:IntSortable){
    }
    sort():void{
        const {length}=this.collection
        for(let i=0; i<length;i++){
            for (let j=0; j<length-i-1;j++){
                if(this.collection.compare(j,j+1)){
                    this.collection.swap(j,j+1)
                }
            }
        }
    }  
}
export abstract class Sorter_3{
    abstract compare(leftIndex:number,rightIndex:number):boolean
    abstract swap(leftIndex:number,rightIndex:number):void
    abstract length:number
    sort():void{
        const {length}=this
        for(let i=0; i<length;i++){
            for (let j=0; j<length-i-1;j++){
                if(this.compare(j,j+1)){
                    this.swap(j,j+1)
                }
            }
        }
    }  
}

