const buttons = document.querySelectorAll("#answers button");

const questionScreen = document.querySelector("#question-screen");
const resultScreen = document.querySelector("#result-screen");

const result = document.querySelector("#result");
const nextButton = document.querySelector("#next-button");


resultScreen.style.display = "none";


buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        questionScreen.style.display = "none";
        resultScreen.style.display = "block";

        if (button.textContent.startsWith("C)")) {

            result.textContent = "Correct!";

        } else {

            result.textContent = "Incorrect!";

        }

    });

});


nextButton.addEventListener("click", function() {

    resultScreen.style.display = "none";
    questionScreen.style.display = "block";

});
