import { IntOutputTarget } from "../Summary";

export class ConsoleReport implements IntOutputTarget{
    print(report:string):void{
        console.log(report)
    }
}