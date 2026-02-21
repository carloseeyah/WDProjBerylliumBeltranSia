document.addEventListener("DOMContentLoaded", function() {
    let quizForm = document.querySelector("#quizForm");
    let submitButton = document.querySelector(".submit-button");
    let currentQuestion = 1;
    const answers = {
        1: "The beast",
        2: "Fairy Godmother's Wand",
        3: "Dude",
        4: "Prince Ben",
        5: "Bennyboo",
        6: "Auradon Prep",
        7: "Evie",
        8: "Enchanted Lake",
        9: "Long Live Evil",
        10: "If Only"
    };
    let quizScore = 0;
    let userAnswers = {};

    //Event listener for form submission
    if (quizForm) {
        quizForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            if (currentQuestion <= 10) {
                // Save current answer
                let currentInputEl = document.getElementById("question-block" + currentQuestion);
                let userAnswer = currentInputEl ? currentInputEl.value.trim() : "";
                userAnswers[currentQuestion] = userAnswer;
                
                // Check if answer is correct
                if (userAnswer.toLowerCase() === answers[currentQuestion].toLowerCase()) {
                    quizScore++;
                }
                
                // Move to next question or show results
                if (currentQuestion < 10) {
                    let currentBlock = document.querySelector(".question-block" + currentQuestion);
                    if (currentBlock) currentBlock.style.display = "none";
                    
                    currentQuestion++;
                    let nextBlock = document.querySelector(".question-block" + currentQuestion);
                    if (nextBlock) nextBlock.style.display = "block";
                    
                    // Update button text if on last question
                    if (currentQuestion === 10) {
                        submitButton.textContent = "Show Score";
                    }
                    
                    // Reset input for next question
                    let nextInput = document.getElementById("question-block" + currentQuestion);
                    if (nextInput) nextInput.value = "Your Answer";
                } else {
                    // All questions answered, show results
                    showResults();
                }
            }
        });
    }

    function showResults() {
        alert("Your score is: " + quizScore + "/10!");
        // Reset form
        quizForm.reset();
        currentQuestion = 1;
        quizScore = 0;
        userAnswers = {};
        for (let i = 1; i <= 10; i++) {
            let block = document.querySelector(".question-block" + i);
            if (block) block.style.display = (i === 1) ? "block" : "none";
            let inputEl = document.getElementById("question-block" + i);
            if (inputEl) inputEl.value = "Your Answer";
        }
    }
});