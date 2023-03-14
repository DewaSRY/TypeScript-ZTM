import { IntOutputTarget } from "../Summary";
import fs from 'fs'


export class htmlReport implements IntOutputTarget{
    print(report:string):void{
        const html=`
        <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
        </div>
        `;
        fs.writeFileSync('report.html',html)
    }
}