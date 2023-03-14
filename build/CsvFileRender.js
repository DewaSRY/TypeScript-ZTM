"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader_2 = exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(fileName) {
        this.data = [];
        this.fileName = fileName;
    }
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: "utf-8"
        }).split('\n').map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
class CsvFileReader_2 {
    constructor(fileName) {
        this.data = [];
        this.fileName = fileName;
    }
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: "utf-8"
        }).split('\n').map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader_2 = CsvFileReader_2;
