interface Sortable{
    length:number;
    compare(leftHeand:number,rightHeaand:number):boolean;
    swap(leftHeand:number,rightHeaand:number):void;
}
export class Sorter{
    constructor(
      public collection:Sortable){
    }
    sort():void{
        const {length}=this.collection
        for(let i=0; i<length;i++){
            for(let j=0;j<length-i-1;j++){
                if(this.collection.compare(j,j+1)){
                    this.collection.swap(j,j+1)
                }
            }
        }
    }
}
export class NumberCollection{
    constructor(
        public data:number[]
    ){}
    get length():number{
        return this.data.length
    }
    compare(leftHeand:number,rightHeaand:number):boolean{
        return this.data[leftHeand] > this.data[rightHeaand]
    }
    swap(leftHeand:number,rightHeaand:number):void{
      const temp=  this.data[leftHeand]
      this.data[leftHeand]=this.data[rightHeaand]
      this.data[rightHeaand]=temp
    }
}
export class CaracterCollection{
    constructor(
        public data:string
    ){}
    get length():number{
        return this.data.length
    }
    compare(leftHeand:number,rightHeaand:number):boolean{
        return this.data[leftHeand].toLowerCase() > this.data[rightHeaand].toLowerCase()
    }
    swap(leftHeand:number,rightHeaand:number):void{
        const character=this.data.split("")
      const temp=  character[leftHeand]
      character[leftHeand]=character[rightHeaand]
      character[rightHeaand]=temp
      this.data=character.join('')
    }
}
class Node{
     next:Node|null=null;
     prev:Node|null=null;
    constructor(
        public value:number,
    ){}
}
export class LinkedList{
    head:Node|null=null
    constructor(
    ){}
    get length():number{
        if(!this.head)return Number(0)
        let length=1
        let node=this.head
        while(node.next){
            length++
            node=node.next
        }
        return length
    }
    add(data:number):void{
        const NewNode=new Node(data)
        if(!this.head)this.head=NewNode
        let tail=this.head
        while(tail.next){
            tail=tail.next
        }
        tail.next=NewNode
    }
    at(index:number):Node {
        if(!this.head)throw new Error("there is no value")
        if(index>this.length) throw new Error("Index out of bounds")
        let counter=0
        let theNode:Node|null=this.head
        while(theNode){
            if(counter===index){
                return theNode
            }else{
                counter++
                theNode=theNode.next
            }
        }
        throw new Error("Index out of bounds")
    }
    compare(leftHeand:number,rightHeaand:number):boolean{
        if(!this.head)throw new Error("there is no value")
        return this.at(leftHeand).value >this.at(rightHeaand).value 
    }
    swap(leftHeand:number,rightHeaand:number):void{
        const leftNode=this.at(leftHeand)
        const rightNode=this.at(rightHeaand)
        const temp=leftNode.value
        leftNode.value=rightNode.value
        rightNode.value=temp
    }
    print():void{
        if(!this.head)throw new Error("there is no value")
        let theNode=this.head
        while(theNode.next){
            theNode=theNode.next
            console.log(theNode.value)
        }
    }
}