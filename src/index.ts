//Example of generics with class

class ArrayOfNumber{
    constructor(public collection:number[]){
    }
    get(index:number):number{
        return this.collection[index]
    }
}
class ArrayOfString{
    constructor(public collection:string[]){
    }
    get(index:number):string{
        return this.collection[index]
    }
}
class ArayOfAnything<T>{
    constructor(public collection:T[]){
    }
    get(index:number):T{
        return this.collection[index]
    }
}
//Example of generics with functions
function printStrings(arr:string[]):void{
    for(let i=0;i< arr.length;i++){
        console.log(arr[i])
    }
}
function printNumber(arr:number[]):void{
    for(let i=0;i< arr.length;i++){
        console.log(arr[i])
    }
}
function printAnything<T>(arr:T[]):void{
    for(let i=0;i< arr.length;i++){
        console.log(arr[i])
    }
}
//Generic Constraints
class Car{
    print(){
        console.log("I am a car")
    }
}
class House{
    print(){
        console.log("I am a Haouse")
    }
}
interface IntPrintable{
    print():void
}
function printHouseOrcars<T extends IntPrintable>(arr:T[]):void{
    for (let i=0;i<arr.length;i++){
        arr[i].print()//T is't has print function 
    }
}
printHouseOrcars([new House(),new House(),new House(),new House(),new House(),new Car()])