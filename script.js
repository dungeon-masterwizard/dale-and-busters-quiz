const introText = document.querySelector("#intro-text");

const introLines = [
    "DALE & BUSTERS",
    "PRESENTS...",
    "THE GRAND QUIZ",
    "CREATED BY MAX YAKUBOV",
    "50 QUESTIONS,",
    "5 CATEGORIES...",
    "ARE YOU READY?"
];

let line = 0;
let character = 0;

function typeLine() {

    // Put the current line into the screen
    introText.textContent = introLines[line].substring(0, character);

    character++;

    // Keep typing until the whole line is displayed
    if (character <= introLines[line].length) {
        setTimeout(typeLine, 50);
    }

    // Once the line is finished, move to the next one
    else {
        line++;
        character = 0;

        setTimeout(typeLine, 1500);
    }
}

typeLine();
