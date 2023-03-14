"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRender = void 0;
const CsvFileRender_1 = require("../CsvFileRender");
const util_date_1 = require("../utils/util.date");
class MatchRender extends CsvFileRender_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, util_date_1.dateStringToData)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchRender = MatchRender;
