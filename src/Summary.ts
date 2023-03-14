import { MatchFootBallData } from "./inheritance/MatchRender"
export interface IntAnalyzer{
    run(matches:MatchFootBallData[]):string
}
export interface IntOutputTarget{
    print(report:string):void;
}


export class Summary{
    analyzer:IntAnalyzer
    OutputTarget:IntOutputTarget
    constructor(
        analyzer:IntAnalyzer, 
        OutputTarget:IntOutputTarget){
        this.analyzer=analyzer
        this.OutputTarget=OutputTarget
    }
    buildAndReport(matches:MatchFootBallData[]):void{
      const output=  this.analyzer.run(matches)
      this.OutputTarget.print(output)
    }
}