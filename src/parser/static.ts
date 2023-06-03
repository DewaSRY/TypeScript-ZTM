import fs from 'fs'
import { parserDate,StatusSymbol,Footballtuple,Analyzer,OutputTarget } from '../utils/utils';
import { WinAnalisis } from './composition';

export class Summary{
    static WinAnalysisWithHTMLReport(teamName:string){
        new WinAnalisis(teamName),
        new HtmlReport()
    }
    constructor(
        public analyzer:Analyzer,
        public outputTarget:OutputTarget
    ){}
    buildAndPrintReport(matches:Footballtuple[]):void{
      const matchResult=  this.analyzer.run(matches) 
      this.outputTarget.print(matchResult)
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