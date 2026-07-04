const questions = [
{
question:"Which language is used for web pages?",
answers:[
{text:"HTML",correct:true},
{text:"Python",correct:false},
{text:"Java",correct:false},
{text:"C++",correct:false}
]
},
{
question:"Which language is used for styling?",
answers:[
{text:"CSS",correct:true},
{text:"HTML",correct:false},
{text:"Java",correct:false},
{text:"Python",correct:false}
]
},
{
question:"Which language makes website interactive?",
answers:[
{text:"JavaScript",correct:true},
{text:"HTML",correct:false},
{text:"CSS",correct:false},
{text:"SQL",correct:false}
]
},
{
question:"Which company developed JavaScript?",
answers:[
{text:"Netscape",correct:true},
{text:"Google",correct:false},
{text:"Microsoft",correct:false},
{text:"Apple",correct:false}
]
},
{
question:"Which tag creates a paragraph?",
answers:[
{text:"<p>",correct:true},
{text:"<h1>",correct:false},
{text:"<div>",correct:false},
{text:"<span>",correct:false}
]
},
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");

let currentQuestion=0;
let score=0;

function startQuiz(){

document.getElementById("start-screen").classList.add("hide");
document.getElementById("quiz-box").classList.remove("hide");

currentQuestion=0;
score=0;
nextBtn.innerHTML="Next";
showQuestion();

}

function showQuestion(){

resetState();

let current=questions[currentQuestion];

questionElement.innerHTML=(currentQuestion+1)+". "+current.question;

current.answers.forEach(answer=>{

const button=document.createElement("button");

button.textContent=answer.text;

button.classList.add("btn");

answerButtons.appendChild(button);

if(answer.correct){
button.dataset.correct=answer.correct;
}

button.addEventListener("click",selectAnswer);

});
}

function resetState(){

nextBtn.style.display="none";

answerButtons.innerHTML="";
}

function selectAnswer(e){

const selected=e.target;

const correct=selected.dataset.correct==="true";

if(correct){
selected.classList.add("correct");
score++;
}else{
selected.classList.add("wrong");
}

Array.from(answerButtons.children).forEach(button=>{

if(button.dataset.correct==="true"){
button.classList.add("correct");
}

button.disabled=true;

});

nextBtn.style.display="block";
}

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}else{

showScore();

}

});

function showScore(){

document.getElementById("quiz-box").classList.add("hide");

document.getElementById("result").classList.remove("hide");

document.getElementById("score").innerHTML = `${score} / ${questions.length}`;

let message = "";

if(score === questions.length){
    message = "🏆 Excellent! Perfect Score!";
}
else if(score >= 4){
    message = "🎉 Great Job!";
}
else if(score >= 3){
    message = "😊 Good Work!";
}
else{
    message = "😔 Try Again!";
}

document.getElementById("message").innerHTML = message;

}

function restartQuiz(){

document.getElementById("result").classList.add("hide");

document.getElementById("quiz-box").classList.remove("hide");

startQuiz();

}

startBtn.addEventListener("click", startQuiz);