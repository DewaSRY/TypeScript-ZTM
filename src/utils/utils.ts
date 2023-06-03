export const parserDate=(stringDate:string):Date=>{
    const paserString=stringDate.split('/')
    const [day,montIndex,year]=paserString.map((value:string):number=>parseInt(value))
    return new Date(year,montIndex-1,day)
}
export enum StatusSymbol{
    Home="H",
    Away="A",
    Drow="D"
}
export type Footballtuple=[Date,string,string,number,number,StatusSymbol,string]
export interface Analyzer{
    run(matches:Footballtuple[]):string
}
export interface OutputTarget{
    print(retport:string):void
}