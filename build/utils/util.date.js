"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToData = void 0;
const dateStringToData = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToData = dateStringToData;
