
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
    if(this.questionIndex==0){
        this.score++;
    }
    else if(this.questionIndex==1){
        this.score=this.score+1;
    }
    else if(this.questionIndex==2){
        this.score=this.score+1;
    }
    else if(this.questionIndex==3){
        this.score=this.score+1;
    }
    else if(this.questionIndex==4){
        this.score=this.score+1;
    }
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("c" + i);
            element.innerHTML = choices[i];
            guess("b" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> You Scored: " + quiz.score + "!!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    var refresh = document.createElement("button");
    refresh.innerHTML = "Try Again!!";
    var button = document.getElementById("load");
    button.appendChild(refresh); 
    refresh.id="refresh";
    refresh.addEventListener ("click", function() {
        refreshPage();
      });
    
};

function refreshPage(){
    location.reload();
} 

var questions = [
    new Question("Phoebe says ''he's her_____'' to represent the relationship between Ross and Rachel in the early espisodes.", ["Starfish", "Lobster","Cat", "Lovebird"],"Lobster"),
    new Question("What is the name of phobe's half brother and twin sister?", ["Frank Jr and Irsula", "Fred Jr and Itzy", "Frank and Irsula", "Itzy and Fred"], "Frank Jr and Irsula"),
    new Question("What magazine is Joey interviewed in season 8?", ["Soap Opera America", "The Soap", "Soap Opera Digest", "The Soap Weekly"],"Soap Opera Digest" ),
    new Question("What was Monica's 2nd favorite game as a kid?", ["Vending Machine", "Ms. Pac Man", "Pac Man", "Candy Crane"], "Vending Machine"),
    new Question("What names does Joey use when he tells his story about the time he went backpacking threw western Europe?", ["Richard Falange", "Richard Smith","Ken Adams", "Scott Smith"], "Ken Adams")
];

var quiz = new Quiz(questions);
populate();