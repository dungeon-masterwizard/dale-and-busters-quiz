const introText = document.querySelector("#intro-text");

const introLines = [
    "DALE & BUSTERS",
    "PRESENTS...",
    "THE GRAND QUIZ",
    "CREATED BY MAX YAKUBOV",
    "50 QUESTIONS,",
    "5 CATEGORIES..."
];

let line = 0;
let character = 0;


/* INTRO */

function typeLine() {

    introText.textContent =
        introLines[line].substring(0, character);

    character++;

    if (character <= introLines[line].length) {

        setTimeout(typeLine, 50);

    } else {

        line++;
        character = 0;

        if (line < introLines.length) {

            setTimeout(typeLine, 1500);

        } else {

            setTimeout(showReadyScreen, 2000);

        }
    }
}


/* READY SCREEN */

function showReadyScreen() {

    const introScreen = document.querySelector("#intro-screen");
    const readyScreen = document.querySelector("#ready-screen");

    introScreen.style.display = "none";

    readyScreen.style.display = "block";
    readyScreen.style.opacity = "1";
}


/* YES / NO */

const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");

yesButton.addEventListener("click", function() {

    const readyScreen = document.querySelector("#ready-screen");

    readyScreen.style.opacity = "0";

    setTimeout(function() {

        readyScreen.style.display = "none";

        showQuestion();

    }, 1000);

});


noButton.addEventListener("click", function() {

    console.log("NO clicked");

});


/* QUESTIONS */

const questions = [

    {
        question: "What is the name of the tavern where the party originally met?",

        options: [
            "The Wet Trout in Easthaven",
            "The Lucky Liar in Lonelywood",
            "The Northlook in Bryn Shander",
            "Hook, Line & Sinker in Caer Konig"
        ],

        answer: 2,

        explanation:
            "The party originally met at the Northlook in Bryn Shander, owned by the retired sellsword Scramsax."
    },


    {
        question: "How did the party enter the castle at Caer Dineval?",

        options: [
            "Killing a cultist and taking their robes",
            "Scaling the walls using grappling hooks and rope",
            "Using Misty Step to reach the portcullis",
            "Charming the cultists at the front gates"
        ],

        answer: 1,

        explanation:
            "The party scaled the Caer's walls using grappling hooks and rope before being discovered by the cultists."
    }

];


let currentQuestion = 0;
let score = 0;


/* SHOW QUESTION */

function showQuestion() {

    const questionScreen =
        document.querySelector("#question-screen");

    const questionNumber =
        document.querySelector("#question-number");

    const questionText =
        document.querySelector("#question");

    const answerA =
        document.querySelector("#answer-a");

    const answerB =
        document.querySelector("#answer-b");

    const answerC =
        document.querySelector("#answer-c");

    const answerD =
        document.querySelector("#answer-d");


    const question = questions[currentQuestion];


    questionNumber.textContent =
        "QUESTION " + (currentQuestion + 1);

    questionText.textContent =
        question.question;


    answerA.textContent =
        "A) " + question.options[0];

    answerB.textContent =
        "B) " + question.options[1];

    answerC.textContent =
        "C) " + question.options[2];

    answerD.textContent =
        "D) " + question.options[3];


    questionScreen.style.display = "block";

    setTimeout(function() {

        questionScreen.style.opacity = "1";

    }, 100);

}


/* ANSWERS */

const answerButtons =
    document.querySelectorAll("#answers button");


answerButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        checkAnswer(index);

    });

});


/* CHECK ANSWER */

function checkAnswer(selectedAnswer) {

    const question =
        questions[currentQuestion];

    const questionScreen =
        document.querySelector("#question-screen");

    const resultScreen =
        document.querySelector("#result-screen");

    const result =
        document.querySelector("#result");

    const explanation =
        document.querySelector("#explanation");


    questionScreen.style.opacity = "0";


    setTimeout(function() {

        questionScreen.style.display = "none";


        if (selectedAnswer === question.answer) {

            result.textContent = "CORRECT!";
            score++;

        } else {

            result.textContent = "INCORRECT!";

        }


        explanation.textContent =
            question.explanation;


        resultScreen.style.display = "block";


        setTimeout(function() {

            resultScreen.style.opacity = "1";

        }, 100);

    }, 1000);

}


/* NEXT QUESTION */

const nextButton =
    document.querySelector("#next-button");


nextButton.addEventListener("click", function() {

    currentQuestion++;

    const resultScreen =
        document.querySelector("#result-screen");

    resultScreen.style.opacity = "0";


    setTimeout(function() {

        resultScreen.style.display = "none";

        showQuestion();

    }, 1000);

});


/* DEVELOPMENT SKIP */

document.addEventListener("keydown", function(event) {

    if (
        event.ctrlKey &&
        event.shiftKey &&
        event.key === "S"
    ) {

        showReadyScreen();

    }

});


/* START */

typeLine();
