"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadFootbal = exports.ReadCsv = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("../utils/utils");
class ReadCsv {
    constructor(csvFile) {
        this.csvFile = csvFile;
        this.data = [];
    }
    read() {
        if (!this.csvFile.includes(".csv"))
            throw new Error('it\'s not a csv file');
        const readFootbalCsv = fs_1.default.readFileSync(this.csvFile, {
            "encoding": "utf-8"
        });
        const separateByline = readFootbalCsv.split('\n');
        const separeateByColumn = separateByline.map((row) => row.split(","));
        this.data = separeateByColumn;
        return this.data;
    }
}
exports.ReadCsv = ReadCsv;
class ReadFootbal extends ReadCsv {
    readFootbal() {
        if (!this.data.length)
            this.read();
        const footbaldata = this.data.map((row) => {
            const [date, homeTeam, awayTeam, homePoint, awayPoint, matchResult, MVP] = row;
            return [
                (0, utils_1.parserDate)(date),
                homeTeam,
                awayTeam,
                parseInt(homePoint),
                parseInt(awayPoint),
                matchResult,
                MVP
            ];
        });
        return footbaldata;
    }
}
exports.ReadFootbal = ReadFootbal;
