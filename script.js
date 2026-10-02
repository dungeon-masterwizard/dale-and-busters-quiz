let introCompleted = localStorage.getItem("introCompleted") === "true";
let score = Number(localStorage.getItem("score")) || 0;
let currentQuestion = Number(localStorage.getItem("currentQuestion")) || 0;
const introText = document.querySelector("#intro-text");

const introLines = [
    "DALE & BUSTERS",
    "PRESENTS...",
    "THE GRAND QUIZ",
    "CREATED BY MAX YAKUBOV",
    "50 QUESTIONS,",
    "5 CATEGORIES..."
];



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

    localStorage.setItem("score", score);
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

    const resultScreen =
        document.querySelector("#result-screen");

    const nextMenu =
        document.querySelector("#next-menu");

    resultScreen.style.opacity = "0";

    setTimeout(function() {

        resultScreen.style.display = "none";

        nextMenu.style.display = "block";

        setTimeout(function() {

            nextMenu.style.opacity = "1";

        }, 100);

    }, 1000);

});

const nextYes =
    document.querySelector("#next-yes");

const nextNo =
    document.querySelector("#next-no");


nextYes.addEventListener("click", function() {
    const nextMenu = document.querySelector("#next-menu");
    nextMenu.style.opacity = "0";

    setTimeout(function() {
        nextMenu.style.display = "none";

        currentQuestion++;
        localStorage.setItem("currentQuestion", currentQuestion);

        showQuestion();
    }, 1000);
});
        nextMenu.style.display = "none";

        currentQuestion++;

        showQuestion();

    }, 1000);

});


nextNo.addEventListener("click", function() {

    const nextMenu =
        document.querySelector("#next-menu");

    const infoMenu =
        document.querySelector("#info-menu");

    nextMenu.style.opacity = "0";

    setTimeout(function() {

        nextMenu.style.display = "none";

        infoMenu.style.display = "block";

        setTimeout(function() {

            infoMenu.style.opacity = "1";

        }, 100);

    }, 1000);

});

const scoreButton =
    document.querySelector("#score-button");

const questionButton =
    document.querySelector("#question-button");

const creatorButton =
    document.querySelector("#creator-button");

const testedButton =
    document.querySelector("#tested-button");

const infoBack =
    document.querySelector("#info-back");

const infoDisplay =
    document.querySelector("#info-display");


scoreButton.addEventListener("click", function() {

    infoDisplay.textContent =
        "Your Score Is: " + score + " / 50";

});


questionButton.addEventListener("click", function() {

    infoDisplay.textContent =
        "You are on question: " +
        (currentQuestion + 1) + " / 50";

});


creatorButton.addEventListener("click", function() {

    infoDisplay.textContent =
        "Max Yakubov, the Dungeon Master of this campaign, made this quiz whilst also learning basic Python.";

});


testedButton.addEventListener("click", function() {

    infoDisplay.textContent =
        "The quiz tests Heroes & Enemies, History, Lore & Items, Locations & Geography, and Deep Cuts.";

});


infoBack.addEventListener("click", function() {

    const infoMenu =
        document.querySelector("#info-menu");
    const nextMenu = 
        document.querySelector("#next-menu");
    
    infoMenu.style.opacity = "0";

    setTimeout(function() {

        infoMenu.style.display = "none";

        nextMenu.style.display = "block";

        setTimeout(function() {

            nextMenu.style.opacity = "1";

        }, 100);

    }, 1000);

});

/* START */

typeLine();
