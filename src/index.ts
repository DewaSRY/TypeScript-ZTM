import { ReadFootbal, } from './parser/inheratance';
import { Summary, ConsoleReport, WinAnalisis,  } from './parser/composition';
const read=new ReadFootbal('./data/football.csv').readFootbal()
const summary=new Summary(
    new WinAnalisis("Man United"),
    new ConsoleReport()
)
summary.buildAndPrintReport(read)
