const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

//get the element whichever is needed
//quiz container

let quiz = document.getElementById("quiz");

//questionHeading 
let questionHeading = document.getElementById('questionHeading');

//Alloption
let optionList = document.querySelectorAll('.optionList');
console.log(optionList);

//eachOption

let aOption = document.getElementById('aOption');
let bOption = document.getElementById('bOption');
let cOption = document.getElementById('cOption');
let dOption = document.getElementById('dOption');

//submit button
let submitbtn = document.getElementById('submit');

//-------------------------------------------------------//

//score count

let score = 0;
let currentQuizCount = 0;
//console.log(quizData[currentQuizCount])

//load the quiz
function loadQuiz() {
    deSelectOption();
    let currentQuizData = quizData[currentQuizCount];
    questionHeading.innerText = currentQuizData.question
    aOption.innerText = currentQuizData.a
    bOption.innerText = currentQuizData.b
    cOption.innerText = currentQuizData.c
    dOption.innerText = currentQuizData.d
}
loadQuiz();

// deSelectOption

function deSelectOption() {
    optionList.forEach((element) => (element.checked = false))
}

//selection of option
function getSelected() {
    let selectedanswer;
    optionList.forEach((element) => {
        if (element.checked) {
            selectedanswer = element.id;
            //console.log(selectedanswer);
        }
    })
    return selectedanswer;
}
//getSelected();

submitbtn.addEventListener('click', () => {
    let answer = getSelected()
    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuizCount].correct) {
            score++;
        }
        currentQuizCount++;
        if (currentQuizCount < quizData.length) {
            // loadQuiz();
        } else {
            quiz.innerHTML = (
            `
            <h2> you scored ${score}/${quizData.length}</h2>
            <button class='Submit' onClick=location.reload()>reload</button>
            `
            )
        }
    }
})