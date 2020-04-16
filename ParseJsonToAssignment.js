var fs = require("fs");

// read JSON from a txt file
// this will likely be deleted since the next statement
// takes the JSON text directly and parses it. We just
// need to pass it here
var text = fs.readFileSync("./convertedAssignmentJSON.txt").toString('utf-8');

// "text" here can be defined to be whatever we're passing the JSON from
var obj = JSON.parse(text);

// TEST for loop (can be deleted after proof of concept)
// see next for loop for skeleton to pass parsed json objects
// from to build assignment
for (i = 0; i < obj.questions.length; i++) {
    questionType = obj.questions[i].questionType;
    console.log();
    //console.log(i);
    //console.log(obj.questions[i]);
    if (questionType == "multiple choice") {
        question = obj.questions[i].question;
        answers = obj.questions[i].answers;
        console.log("Question: " + question);
        console.log("Answers: " + answers)
    } else if (questionType == "short answer") {
        question = obj.questions[i].question;
        console.log("Question: " + question);
    } else if (questionType == "article/video link") {
        instructions = obj.questions[i].instructions;
        link = obj.questions[i].link;
        console.log("Instructions: " + instructions);
        console.log("Link: " + link);
    } else {
        console.log("ERROR: missing/incorrect question type")
    }
}

/*
for (i = 0; i < obj.questions.length; i++) {
    questionType = obj.questions[i].questionType;
    
    // Pass 'questionType' to appropriate spot
    // May not be necessary since the IF statement determines the question builders


    if (questionType == "multiple choice") {
        question = obj.questions[i].question; // string
        answers = obj.questions[i].answers; // list (I think)
        
        // Pass 'question' and 'answers' to appropriate spot


    } else if (questionType == "short answer") {
        question = obj.questions[i].question; // string
        
        // Pass 'question' to appropriate spot


    } else if (questionType == "article/video link") {
        instructions = obj.questions[i].instructions; // string
        link = obj.questions[i].link; // string (web address)
        
        // Pass 'instructions'' and 'link' to appropriate spot
    

    }
}*/