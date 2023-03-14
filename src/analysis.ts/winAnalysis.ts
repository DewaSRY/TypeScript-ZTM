import { IntAnalyzer } from "../Summary";
import { MatchFootBallData } from "../inheritance/MatchRender";
import { MatchResult } from "../utils/utile.match";

export class WinAnalysis implements IntAnalyzer{
    team:string
    constructor(team:string){
        this.team=team
    }
    run(matches:MatchFootBallData[]):string{
        let wins=0
        for (let match of matches){
            if(match[1]==="Man United" && match[5]=== MatchResult.HomeWin){
                wins++
            }else if (match[2]==="Man United" && match[5]=== MatchResult.AwayWin){
                wins++
            }
        }
        return `Team ${this.team} win ${wins} nmatch`
    }

}