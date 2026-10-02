const introText = document.querySelector("#intro-text");

const introLines = [
    "DALE & BUSTERS",
    "A DUNGEONS & DRAGONS CAMPAIGN",
    "PRESENTS...",
    "THE CAMPAIGN QUIZ",
    "CREATED BY MAX YAKUBOV",
    "50 QUESTIONS",
    "5 CATEGORIES"
];

let line = 0;


function typeLine() {

    introText.textContent = introLines[line];

    line++;

}


typeLine();
