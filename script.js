const buttons = document.querySelectorAll("#answers button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.textContent.startsWith("C)")) {
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }

    });

});