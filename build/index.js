"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { NumbersCollection } from "./Number.Collection"
// import { CaractersCollection } from "./Caracter.collection"
const LinkList_1 = require("./LinkList");
const linkList = new LinkList_1.LinkedList();
// const sorter=new Sorter_2(linkList)
linkList.add(1);
linkList.add(1);
linkList.add(1);
linkList.add(1);
linkList.add(1);
linkList.add(9);
linkList.add(3);
linkList.add(6);
linkList.add(8);
linkList.add(8);
linkList.sort();
linkList.printNode();
