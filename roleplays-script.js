
/*Add your JavaScript here*/
const answers = document.querySelectorAll('.answer');
const resultBox = document.getElementById('result');
const resultDesc = document.getElementById('resultDesc');
const nextStepsElement = document.getElementById('nextSteps');
const button = document.getElementById('restart');
const scores = {"A": 0, "B": 0};
const results = {
  "A": "Team Decision Making Events",
  "B": "Individual Series Events",
};

const descriptions = {
  "A": "These events entail working in a team of two to address a roleplay situation. Teams will take the 100-question exam of their event’s cluster topic. Exams must be taken individually (teams cannot work together), and the scores will be averaged. In the roleplay, each team will be given a roleplay situation, 30 minutes to prepare a presentation with visuals together based on said situation, 15 minutes to present (including time for judge questions), and they will need to address 7 performance indicators (given during prep time) in the presentation.",
  "B": "These events entail working individually to address a roleplay situation. The participant will take the 100-question exam of their event’s cluster topic. In the roleplay, the participant will be given a roleplay situation, 10 minutes to prepare a presentation with visuals based on said situation, 10 minutes to present (including time for judge questions), and they will need to address 5 performance indicators (given during prep time) in the presentation.",
};

const nextStepsData = {
  "A": "Your next steps: Look into Team Decision Making events by filtering to that category at deca.org/compete!",
  "B": "Your next steps: Look into Individual Series events by filtering to that category at deca.org/compete!",
};

var questionsAnswered = 0;

answers.forEach(answer => {
  answer.addEventListener('click', () => {
    const parentQuestion = answer.closest('.question');
    if (parentQuestion.classList.contains('answered')) return;
    
    const type = answer.getAttribute('data-type');
    scores[type]++;
    questionsAnswered++;
    
    parentQuestion.classList.add('answered');
    answer.classList.add('selected');

    if (questionsAnswered === document.querySelectorAll('.question').length) {
      const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
      resultBox.textContent = results[topType];
      resultDesc.textContent = descriptions[topType];
      nextStepsElement.textContent = nextStepsData[topType];
    }
  });
});

button.addEventListener('click', restart);

function restart() {
  resultBox.textContent = "";
  resultDesc.textContent = "";
  nextStepsElement.textContent = "";

  // Reset scores
  scores.A = 0;
  scores.B = 0;

  // Reset questions answered counter
  questionsAnswered = 0;

  // Remove selected class from answers
  const selectedAnswers = document.querySelectorAll(".selected");
  selectedAnswers.forEach(answer => {
    answer.classList.remove("selected");
  });

  // Remove answered class from questions
  const answeredQuestions = document.querySelectorAll(".question.answered");
  answeredQuestions.forEach(question => {
    question.classList.remove("answered");
  });
}
