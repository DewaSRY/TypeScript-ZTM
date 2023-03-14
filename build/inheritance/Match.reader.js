"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matchreader = void 0;
const util_date_1 = require("../utils/util.date");
class Matchreader {
    constructor(reader) {
        this.matche = [];
        this.reader = reader;
    }
    load() {
        this.reader.read();
        this.matche = this.reader.data.map((row) => {
            return [
                (0, util_date_1.dateStringToData)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.Matchreader = Matchreader;
