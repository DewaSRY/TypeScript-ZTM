import { CsvFileReader_2 } from "./CsvFileRender"
import { Matchreader } from "./inheritance/Match.reader"
import { ConsoleReport } from "./reportTarget/CosoleReport"
import { htmlReport } from "./reportTarget/HtmlReport"
import { WinAnalysis } from "./analysis.ts/winAnalysis"
import { Summary } from "./Summary"

const footballread=new CsvFileReader_2('football.csv')
const reader=new Matchreader(footballread)
reader.load()
const matchData=reader.matche

const sumary=new Summary(
    new WinAnalysis("Man United"),
    new ConsoleReport()
)

sumary.buildAndReport(matchData)
