"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inheratance_1 = require("./parser/inheratance");
const composition_1 = require("./parser/composition");
const read = new inheratance_1.ReadFootbal('./data/football.csv').readFootbal();
const summary = new composition_1.Summary(new composition_1.WinAnalisis("Man United"), new composition_1.ConsoleReport());
summary.buildAndPrintReport(read);
