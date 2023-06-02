"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.CaracterCollection = exports.NumberCollection = exports.Sorter = void 0;
// abstract class
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
class NumberCollection extends Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftHeand, rightHeaand) {
        return this.data[leftHeand] > this.data[rightHeaand];
    }
    swap(leftHeand, rightHeaand) {
        const temp = this.data[leftHeand];
        this.data[leftHeand] = this.data[rightHeaand];
        this.data[rightHeaand] = temp;
    }
}
exports.NumberCollection = NumberCollection;
class CaracterCollection extends Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftHeand, rightHeaand) {
        return this.data[leftHeand].toLowerCase() > this.data[rightHeaand].toLowerCase();
    }
    swap(leftHeand, rightHeaand) {
        const character = this.data.split("");
        const temp = character[leftHeand];
        character[leftHeand] = character[rightHeaand];
        character[rightHeaand] = temp;
        this.data = character.join('');
    }
}
exports.CaracterCollection = CaracterCollection;
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList extends Sorter {
    constructor() {
        super();
        this.head = null;
    }
    get length() {
        if (!this.head)
            return Number(0);
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    add(data) {
        const NewNode = new Node(data);
        if (!this.head)
            this.head = NewNode;
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = NewNode;
    }
    at(index) {
        if (!this.head)
            throw new Error("there is no value");
        if (index > this.length)
            throw new Error("Index out of bounds");
        let counter = 0;
        let theNode = this.head;
        while (theNode) {
            if (counter === index) {
                return theNode;
            }
            else {
                counter++;
                theNode = theNode.next;
            }
        }
        throw new Error("Index out of bounds");
    }
    compare(leftHeand, rightHeaand) {
        if (!this.head)
            throw new Error("there is no value");
        return this.at(leftHeand).value > this.at(rightHeaand).value;
    }
    swap(leftHeand, rightHeaand) {
        const leftNode = this.at(leftHeand);
        const rightNode = this.at(rightHeaand);
        const temp = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = temp;
    }
    print() {
        if (!this.head)
            throw new Error("there is no value");
        let theNode = this.head;
        while (theNode.next) {
            theNode = theNode.next;
            console.log(theNode.value);
        }
    }
}
exports.LinkedList = LinkedList;
