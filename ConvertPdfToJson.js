let fs = require('fs');
PDFParser = require("pdf2json");

// when pdf is uploaded, it goes here to be parsed into json
pdfFile = "template_test_1.pdf";

let pdfParser = new PDFParser(this,1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    parsedPdf = pdfParser.getRawTextContent();
    convertTextToJson(parsedPdf);
});
pdfParser.loadPDF(pdfFile);

function convertTextToJson(objPdf) {
    let obj = {"questions":[]};
    let splitted = objPdf.toString().split("\n");
    
    questionDict = {};
    i = 0;

    while (i < splitted.length) {
        let splitLine = splitted[i].split(" - ");
        if ((splitLine[1] != undefined)) {
            questionDict[splitLine[0]] = splitLine[1].trim();
        } else if (isEmpty(questionDict) != true) {
            Object.values(obj)[0].push(questionDict);
            questionDict = {};
        }
        i++;
    }

    // writes the json to a txt file
    // probably need to redo this so it just returns the json as a string to pass
    fs.writeFile("./convertedAssignmentJSON.txt", JSON.stringify(obj), function(err) {
        if (err) {
            return console.log(err);
        }
    });

}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}