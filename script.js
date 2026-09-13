/* =========================================
   JAVA SHINOBI ACADEMY
   Interactive JavaScript
   ========================================= */


/* ================= COPY CODE ================= */

function copyCode(id) {

    const codeElement = document.getElementById(id);

    if (!codeElement) {
        return;
    }

    const code = codeElement.innerText;

    navigator.clipboard.writeText(code)
        .then(function () {

            const button =
                codeElement
                    .closest(".code-card, .large-code-card")
                    .querySelector("button");

            const oldText = button.innerText;

            button.innerText = "COPIED ✓";

            setTimeout(function () {
                button.innerText = oldText;
            }, 1500);

        })
        .catch(function () {

            alert("Code copied successfully!");

        });
}


/* ================= QUIZ ================= */

function checkAnswer(button, correct) {

    const result =
        document.getElementById("quizResult");

    const buttons =
        document.querySelectorAll(".options button");

    buttons.forEach(function (btn) {
        btn.disabled = true;
    });

    if (correct) {

        result.innerHTML =
            "✓ CORRECT! Your Java I/O chakra is getting stronger! ⚡";

        button.style.borderColor = "#ff7200";
        button.style.color = "#ff7200";

    } else {

        result.innerHTML =
            "✗ Not quite! The correct answer is Scanner.";

        button.style.borderColor = "#ff7200";

    }
}


/* ================= MODE BUTTON ================= */

function toggleMode() {

    document.body.classList.toggle("bright-mode");

}


/* ================= SCROLL EFFECT ================= */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(255, 100, 0, 0.12)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* ================= PAGE LOAD ================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Java Shinobi Academy loaded successfully."
    );

});
