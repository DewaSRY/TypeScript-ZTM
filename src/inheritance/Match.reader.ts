import { MatchFootBallData } from "./MatchRender";
import { dateStringToData } from "../utils/util.date";
import { MatchResult } from "../utils/utile.match";

interface IntDatareader{
    read():void;
    data:string[][];
}
export class Matchreader{
    reader:IntDatareader
    matche:MatchFootBallData[]=[]
    constructor(reader:IntDatareader){
        this.reader=reader
    }
    load():void{
        this.reader.read()
        this.matche=this.reader.data.map((row:string[]):MatchFootBallData=>{
            return [
                dateStringToData(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ]
        })
    }

}