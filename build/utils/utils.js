"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusSymbol = exports.parserDate = void 0;
const parserDate = (stringDate) => {
    const paserString = stringDate.split('/');
    const [day, montIndex, year] = paserString.map((value) => parseInt(value));
    return new Date(year, montIndex - 1, day);
};
exports.parserDate = parserDate;
var StatusSymbol;
(function (StatusSymbol) {
    StatusSymbol["Home"] = "H";
    StatusSymbol["Away"] = "A";
    StatusSymbol["Drow"] = "D";
})(StatusSymbol = exports.StatusSymbol || (exports.StatusSymbol = {}));
