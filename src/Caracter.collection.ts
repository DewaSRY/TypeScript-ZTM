import { Sorter_3 } from "./Sorter";

export class CaractersCollection extends Sorter_3{
    data:string;
    private caracter:string[];
    constructor (data:string){
        super()
        this.data=data
        this.caracter=this.data.split('')
    }
    private theData():void{
        this.data=this.caracter.join('')
    }
    get length():number{
        return this.data.length
    }
    compare(leftIndex:number,rightIndex:number):boolean{
        return (
            this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
            )
    }
    swap(leftIndex:number,rightIndex:number):void{
        const leftHand=this.caracter[leftIndex]
       this.caracter[leftIndex]=this.caracter[rightIndex]
       this.caracter[rightIndex]=leftHand
       this.theData()
    }
}
