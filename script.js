// global variables 
var welcome = document.getElementById("welcome");

var game = document.getElementById("game")

var startbtn = document.getElementById("start");

var timerdiv = document.getElementById("timer");

var clock = 45; 

var timer;

var score= document.getElementById("scoreboard");

var questionOptions = [
    {
        question: "What is JS short for?",
        options: ["A) jump shot", "B) Javascript", "C) Jack Sparrow", "D) John Smith"],
        answer: "B) Javascript"
    },{
        question: "An array is used to store what?",
        options: ["A) shoes", "B) math problems", "C) multiple values in a single variable", "D) an HTML document"],
        answer: "C) multiple values in a single variable"
    },{
        question: "An object-oriented programming language is which of the following?",
        options: ["A) HTML", "B) jQuery", "C) Instagram", "D) Javascript"],
        answer: "D) Javascript"
    },{
        question: "In Javascript what do we call?",
        options: ["A) a function", "B) an array", "C) a variable", "D) Batman"],
        answer: "A) a function"
    }
];

function startquiz(){
    welcome.setAttribute("class", "hide");
    game.classList.remove("hide");
    timer = setInterval(countdown, 1000);

}
function countdown(){
    clock --;
    timerdiv.textContent = clock;
    if (clock <= 0 ){
        clock = 0;
         timerdiv.textContent = clock;
         endquiz();

    }
}

function generateQuestion (){
    var question = questionsArray[questions.questionOptions]
}

function endquiz(){
    clearInterval(timer);
}







startbtn.onclick = startquiz; 