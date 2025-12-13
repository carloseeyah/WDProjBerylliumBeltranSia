document.addEventListener("DOMContentLoaded", function() {
    let quizForm = document.querySelector("#quizForm");
    if (quizForm) {
        quizForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            let quizScore = 0;

            let q1El = document.getElementById("question-block1");
            let question1Answer = q1El ? q1El.value.trim() : "";
            if (question1Answer)
                {
                    if (question1Answer == "The beast"){
                        quizScore++;
                    }
                }

            let q2El = document.getElementById("question-block2");
            let question2Answer = q2El ? q2El.value.trim() : "";
            if (question2Answer)
                {
                    if(question2Answer == "Fairy Godmother's Wand"){
                        quizScore++;
                    }
                }
            let q3El = document.getElementById("question-block3");
            let question3Answer = q3El ? q3El.value.trim() : "";
            if (question3Answer)
                {
                    if(question3Answer == "Dude"){
                        quizScore++;
                    }
                }

            let q4El = document.getElementById("question-block4");
            let question4Answer = q4El ? q4El.value.trim() : "";
            if (question4Answer)
                {
                    if(question4Answer == "Prince Ben"){
                        quizScore++;
                    }
                }

            let q5El = document.getElementById("question-block5");
            let question5Answer = q5El ? q5El.value.trim() : "";
            if (question5Answer)
                {
                    if(question5Answer == "Bennyboo"){
                        quizScore++;
                    }
                }   

            let q6El = document.getElementById("question-block6");
            let question6Answer = q6El ? q6El.value.trim() : "";
            if (question6Answer)
                {
                    if(question6Answer == "Auradon Prep"){
                        quizScore++;
                    }
                }

            let q7El = document.getElementById("question-block7");
            let question7Answer = q7El ? q7El.value.trim() : "";
            if (question7Answer)
                {
                    if(question7Answer == "Evie"){
                        quizScore++;
                    }
                }

            let q8El = document.getElementById("question-block8");
            let question8Answer = q8El ? q8El.value.trim() : "";
            if (question8Answer)
                {
                    if(question8Answer == "Enchanted Lake"){
                        quizScore++;
                    }
                }

            let q9El = document.getElementById("question-block9");
            let question9Answer = q9El ? q9El.value.trim() : "";
            if (question9Answer)
                {
                    if(question9Answer == "Long Live Evil"){
                        quizScore++;
                    }
                }

            let q10El = document.getElementById("question-block10");
            let question10Answer = q10El ? q10El.value.trim() : "";
            if (question10Answer)
            {
                        quizScore++;
            }
            
            console.log('Quiz answers:', {
                question1Answer, question2Answer, question3Answer, question4Answer, question5Answer, question6Answer, question7Answer, question8Answer, question9Answer, question10Answer
            });
            console.log('Quiz score before alert:', quizScore);
            
        alert("Your score is: " + quizScore + "/10!");
        });
    }
});