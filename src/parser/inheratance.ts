import fs from "fs"
import { parserDate,StatusSymbol,Footballtuple } from '../utils/utils';
export class ReadCsv{
    data:string[][]=[]
    constructor(
        public csvFile:string
    ){}
    read():string[][]{
        if(!this.csvFile.includes(".csv"))throw new Error('it\'s not a csv file')
        const readFootbalCsv=fs.readFileSync(this.csvFile,{
            "encoding":"utf-8"
        } )
        const separateByline=readFootbalCsv.split('\n')
        const separeateByColumn=separateByline  .map((row:string):string[]=>row.split(","))
        this.data=separeateByColumn
        return this.data
    }
}
export class ReadFootbal extends ReadCsv {
    readFootbal():Footballtuple[]{
        if(!this.data.length)this.read()
        const footbaldata=this.data.map((row:string[]):Footballtuple=>{
            const [date,homeTeam,awayTeam,homePoint,awayPoint,matchResult,MVP]=row
            return[
                parserDate(date),
                homeTeam,
                awayTeam,
                parseInt(homePoint), 
                parseInt(awayPoint),
                matchResult as StatusSymbol,
                MVP
            ]
        })
        return footbaldata
    }
}