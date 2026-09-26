import XLSX from 'xlsx';
import path from 'path';//this is inbuilt inside node.js

export class Excelreader {
    static readExcelFile(Filename, Sheetname) {
        //we are defining the path of the file
        const filePath = path.join(__dirname, '../Data', Filename)
        //read excel file
        const workBook = XLSX.readFile(filePath)
        //get the sheetName
        const workSheet = workBook.Sheets[Sheetname]
        //convert the sheet into Json
        const xlsxToJson=XLSX.utils.sheet_to_json(workSheet)

        return xlsxToJson;

    }
}