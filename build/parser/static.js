"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = exports.Summary = void 0;
const fs_1 = __importDefault(require("fs"));
const composition_1 = require("./composition");
class Summary {
    static WinAnalysisWithHTMLReport(teamName) {
        new composition_1.WinAnalisis(teamName),
            new HtmlReport();
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const matchResult = this.analyzer.run(matches);
        this.outputTarget.print(matchResult);
    }
}
exports.Summary = Summary;
class HtmlReport {
    print(retport) {
        const html = `
        <div>
            <h1>Analysis Output</h1>
            <h3>${retport}</h3>
        </div>
        `;
        fs_1.default.writeFileSync('report.html', html);
    }
}
exports.HtmlReport = HtmlReport;
