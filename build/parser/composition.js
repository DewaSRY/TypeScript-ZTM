"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = exports.ConsoleReport = exports.WinAnalisis = exports.Summary = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("../utils/utils");
class Summary {
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
class WinAnalisis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let Wins = 0;
        for (let match of matches) {
            const [date, homeTeam, awayTeam, homePoint, awayPoint, matchWiner, MVP] = match;
            if (homeTeam === this.teamName && matchWiner === utils_1.StatusSymbol.Home)
                Wins++;
            if (awayTeam === this.teamName && matchWiner === utils_1.StatusSymbol.Away)
                Wins++;
        }
        return `${this.teamName} won ${Wins} Game`;
    }
}
exports.WinAnalisis = WinAnalisis;
class ConsoleReport {
    print(retport) {
        console.log(retport);
    }
}
exports.ConsoleReport = ConsoleReport;
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
