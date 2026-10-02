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

function typeLine() {

    introText.textContent = introLines[line].substring(0, character);

    character++;

    if (character <= introLines[line].length) {
        setTimeout(typeLine, 50);
    }

    else {
        line++;
        character = 0;

        if (line < introLines.length) {
            setTimeout(typeLine, 1500);
        } else {
            setTimeout(showReadyScreen, 2000);
        }
    }
}

function showReadyScreen() {

    const introScreen = document.querySelector("#intro-screen");
    const readyScreen = document.querySelector("#ready-screen");

    introScreen.style.opacity = "0";

    setTimeout(function() {

        introScreen.style.display = "none";
        readyScreen.style.display = "block";

        setTimeout(function() {
            readyScreen.style.opacity = "1";
        }, 100);

    }, 1000);
}

typeLine();
