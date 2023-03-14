"use strict";
//Example of generics with class
class ArrayOfNumber {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfString {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
//Example of generics with functions
function printStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//Generic Constraints
class Car {
    print() {
        console.log("I am a car");
    }
}
class House {
    print() {
        console.log("I am a Haouse");
    }
}
function printHouseOrcars(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print(); //T is't has print function 
    }
}
printHouseOrcars([new House(), new House(), new House(), new House(), new House(), new Car()]);
