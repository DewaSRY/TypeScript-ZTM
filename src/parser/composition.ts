import fs from 'fs'
import { parserDate,StatusSymbol,Footballtuple } from '../utils/utils';
export interface Analyzer{
    run(matches:Footballtuple[]):string
}
export interface OutputTarget{
    print(retport:string):void
}
export class Summary{
    constructor(
        public analyzer:Analyzer,
        public outputTarget:OutputTarget
    ){}
    buildAndPrintReport(matches:Footballtuple[]):void{
      const matchResult=  this.analyzer.run(matches) 
      this.outputTarget.print(matchResult)
    }
}
export class WinAnalisis implements Analyzer{
    constructor(
        public teamName:string
    ){}
    run(matches:Footballtuple[]):string{
        let Wins=0
        for (let match of matches){
            const [date,homeTeam,awayTeam,homePoint,awayPoint,matchWiner,MVP]=match
            if(homeTeam===this.teamName&& matchWiner===StatusSymbol.Home)Wins++
            if(awayTeam===this.teamName&& matchWiner===StatusSymbol.Away)Wins++
        }
        return `${this.teamName} won ${Wins} Game`
    }
}
export class ConsoleReport implements OutputTarget{
    print(retport:string):void{
        console.log(retport)
    }
}
export class HtmlReport implements OutputTarget{
    print(retport:string):void{
        const html=`
        <div>
            <h1>Analysis Output</h1>
            <h3>${retport}</h3>
        </div>
        `
        fs.writeFileSync('report.html',html)
    }
}
