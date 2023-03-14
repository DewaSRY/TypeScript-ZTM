"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
const utile_match_1 = require("../utils/utile.match");
class WinAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === "Man United" && match[5] === utile_match_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === "Man United" && match[5] === utile_match_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} win ${wins} nmatch`;
    }
}
exports.WinAnalysis = WinAnalysis;
