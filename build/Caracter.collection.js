"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaractersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CaractersCollection extends Sorter_1.Sorter_3 {
    constructor(data) {
        super();
        this.data = data;
        this.caracter = this.data.split('');
    }
    theData() {
        this.data = this.caracter.join('');
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.caracter[leftIndex];
        this.caracter[leftIndex] = this.caracter[rightIndex];
        this.caracter[rightIndex] = leftHand;
        this.theData();
    }
}
exports.CaractersCollection = CaractersCollection;
