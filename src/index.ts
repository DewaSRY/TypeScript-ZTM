import { Sorter_2, Sorter } from './Sorter';
// import { NumbersCollection } from "./Number.Collection"
// import { CaractersCollection } from "./Caracter.collection"
import { LinkedList } from "./LinkList"


const linkList=new LinkedList()
// const sorter=new Sorter_2(linkList)
linkList.add(1)
linkList.add(1)
linkList.add(1)
linkList.add(1)
linkList.add(1)
linkList.add(9)
linkList.add(3)
linkList.add(6)
linkList.add(8)
linkList.add(8)
linkList.sort()
linkList.printNode()