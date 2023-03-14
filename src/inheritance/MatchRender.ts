import { CsvFileReader } from "../CsvFileRender";
import { dateStringToData } from "../utils/util.date";
import { MatchResult } from "../utils/utile.match";
export type MatchFootBallData=[Date,string,string,number,number,MatchResult,string]

export class MatchRender extends CsvFileReader{
    mapRow(row:string[]):MatchFootBallData{
        return [
            dateStringToData(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}