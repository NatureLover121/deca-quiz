
/*Add your JavaScript here*/
const answers = document.querySelectorAll('.answer');
const resultBox = document.getElementById('result');
const resultDesc = document.getElementById('resultDesc');
const nextStepsElement = document.getElementById('nextSteps');
const button = document.getElementById('restart');
const scores = {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0};
const results = {
  "A": "Professional Selling Events",
  "B": "Operations Research Events",
  "C": "Project Management Events",
  "D": "Entrepreneurship Events",
  "E": "Integrated Marketing Campaign Events"
};

const descriptions = {
  "A": "These events entail working individually to organize a presentation or consultation based on a prompt that changes annually.  The participant will take the 100-question exam of their event’s cluster topic. You cannot do a roleplay if you do this event. The oral presentation, unlike roleplay events, must be prepared prior to the competition. Unlike roleplay events, pre-prepared notes, visual aids, and other items are allowed, but only what can be hand carried to the presentation. The participant will have 15 minutes to present their work to the judge, including time for judge questions.",
  "B": "The general process for operations research events is to 1. Select a local business or organization, 2. Design a research study based on this year’s topic, 3. Conduct the research study, 4. Analyze the results, 5. Prepare a strategic plan based on the research study, and 6. Prepare a proposed budget. All of these steps are documented in the submitted 20-page paper. After the paper is submitted in January and approved to go to the State level (most coherent papers are typically approved for State), teams work on their 15-minute prepared presentation based on the paper, which they will present to a judge in February/March at the state conference.",
  "C": "Project Management Events involve managing large-scale projects that create real impact. These require significant writing, communication, and project coordination skills.",
  "D": "Entrepreneurship Events focus on starting new ventures based on innovative ideas. The writing requirement varies based on whether you are doing an entrepreneurship 10-pager or 20-pager, and the guidelines vary as well.",
  "E": "Marketing Campaign Events involve creating comprehensive marketing campaigns. These typically require up to 10 pages of writing and focus on creative marketing strategies."
};

const nextStepsData = {
  "A": "Your next steps: Look into Professional Selling and Consulting events by filtering to that category at deca.org/compete!",
  "B": "Your next steps: Look into Business Operations Research events by filtering to that category at deca.org/compete!",
  "C": "Your next steps: Look into Project Management events by filtering to that category at deca.org/compete!",
  "D": "Your next steps: Look into Entrepreneurship events by filtering to that category at deca.org/compete!",
  "E": "Your next steps: Look into the three types of Integrated Marketing Campaign events by filtering to that category at deca.org/compete!"
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
