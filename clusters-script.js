
/*Add your JavaScript here*/
const answers = document.querySelectorAll('.answer');
const resultBox = document.getElementById('result');
const resultDesc = document.getElementById('resultDesc');
const nextStepsElement = document.getElementById('nextSteps');
const button = document.getElementById('restart');
const scores = {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0};
const results = {
  "A": "Entrepreneurship!",
  "B": "Marketing!",
  "C": "Hospitality and Tourism!",
  "D": "Business Management and Administration!",
  "E": "Finance!"
};

const descriptions = {
  "A": "You're an idea machine. You love innovation, taking risks, and starting something new from scratch.",
  "B": "You're persuasive and creative. Marketing is all about connecting people to ideas in memorable ways.",
  "C": "You thrive on experience. You love helping people, making things smooth, and creating unforgettable moments.",
  "D": "You're a planner and a problem-solver. You keep everything running, from systems to teams.",
  "E": "You're logical, precise, and money-savvy. Finance is your playground for analysis and strategy."
};

const nextStepsData = {
  "A": "Your next steps: Look into Entrepreneurship events by filtering to that category at deca.org/compete!",
  "B": "Your next steps: Look into Marketing events by filtering to that category at deca.org/compete!",
  "C": "Your next steps: Look into Hospitality and Tourism events by filtering to that category at deca.org/compete!",
  "D": "Your next steps: Look into Business Management and Administration events by filtering to that category at deca.org/compete!",
  "E": "Your next steps: Look into Finance events by filtering to that category at deca.org/compete!"
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
  scores.C = 0;
  scores.D = 0;
  scores.E = 0;

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
