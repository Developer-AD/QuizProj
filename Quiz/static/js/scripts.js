// alert('Script file is working.')
// const questions = [
//   {
//     question: "Which is the largest animal in the world?",
//     answers: [
//       { text: "Shark", correct: false },
//       { text: "Blue Whale", correct: true },
//       { text: "Giraffe", correct: false },
//       { text: "Elephant", correct: false },
//     ],
//   },
//   {
//     question: "Which is the smallest animal in the world?",
//     answers: [
//       { text: "Shark", correct: true },
//       { text: "Blue Whale", correct: false },
//       { text: "Giraffe", correct: false },
//       { text: "Elephant", correct: false },
//     ],
//   },
// ];

// const quesElement = document.getElementById("question");
// const ansButton = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("nextBtn");

// // alert(quesElement);
// // alert(ansButton);
// // alert(nextButton);

// let currentQuesInd = 0;
// let score = 0;

// function startQuiz() {
//   currentQuesInd = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   // showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuesInd];
//   let questionNo = currentQuesInd + 1;
//   quesElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("ans-btn");

//     ansButton.appendChild(button);

//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }

//     button.addEventListener("click", selectAnswer);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (ansButton.firstChild) {
//     ansButton.removeChild(ansButton.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectBtn = e.target;
//   const isCorrect = selectBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectBtn.classList.add("correct");
//     score++;
//   } else {
//     selectBtn.classList.add("incorrect");
//   }
//   Array.from(ansButton.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

// function handleNextButton() {
//   currentQuesInd++;
//   if (currentQuesInd < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }
// nextButton.addEventListener("click", () => {
//   if (currentQuesInd < questions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });
// startQuiz();

// function showScore() {
//   resetState();
//   quesElement.innerHTML = `You scored ${score} out of ${questions.length}`;
//   nextButton.innerHTML = "Play Agian";
//   nextButton.style.display = "block";
//   // score = 0;
// }

let currentStep = 1;

function moveStep(step) {
  const totalSteps = 3;

  // Hide the current step
  $(`#step${currentStep}`).removeClass("active");

  // Move to the next step
  currentStep += step;

  // Show the new step
  $(`#step${currentStep}`).addClass("active");

  // Disable/Enable buttons based on current step
  if (currentStep === 1) {
    $(".prevBtn").prop("disabled", true);
  } else {
    $(".prevBtn").prop("disabled", false);
  }

  if (currentStep === totalSteps) {
    $(".nextBtn").prop("disabled", true);
    // Show confirmation on the last step (if needed)
  } else {
    $(".nextBtn").prop("disabled", false);
  }
}

// Initial setup: Move to the first step
$(document).ready(function () {
  $(".prevBtn").prop("disabled", true);
  $(".nextBtn").prop("disabled", false);
});
