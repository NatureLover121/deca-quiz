
/*Add your JavaScript here*/
const answers = document.querySelectorAll('.answer');
const resultBox = document.getElementById('result');
const resultDesc = document.getElementById('resultDesc');
const nextStepsElement = document.getElementById('nextSteps');
const button = document.getElementById('restart');
const scores = {"A": 0, "B": 0, "C": 0, "D": 0, "E": 0};
const results = {
  "A": "Roleplays!",
  "B": "Prepared events!",
  "C": "Both roleplays and prepared events!",
  "D": "Corporate challenges and/or Virtual Business Challenges!"
};

const descriptions = {
  "A": "Roleplays are a category of DECA event involving two main components: a 100-question multiple choice exam, and a presentation based on a case study. You will have only a small amount of time to prepare based on the case study before you go in for a mostly improvised presentation. Based on your answers, you would be most suited to a roleplay event.",
  "B": "There are a wide variety of events under the umbrella of prepared events. These include pitch decks, 20-page papers, and prepared presentations under the 'professional selling' label. These often involve months of preparation, more or less depending on the specific event. A pre-prepared presentation is given, sometimes along with a written component. Very few of these events require you to take the 100-question cluster exam. Based on your answers, you would be most suited to a prepared event.",
  "C": "Based on your answers, you would be able to attempt both roleplays and prepared events. Roleplays involve more improvisation, whereas prepared events involve more preparation. Be aware that both are fairly time-consuming.",
  "D": "Corporate challenges are competitive events in which you compete directly against others at the international level, rather than proceeding from area to State to ICDC. They are a smaller time commitment than roleplays or writtens, but to win will still require a great deal of effort. The guidelines vary based on the specific challenge that you do, but winning top 3 will often earn you a chance for recognition on stage at ICDC. Virtual business challenges involve computer-based simulations in which you will attempt to make the most profit with the circumstances of your simulation. Based on your answers, you would be most suited to attempting a corporate challenge, virtual business challenge, or the Stock Market Game."
};

const nextStepsData = {
  "A": "Your next steps: Complete the Roleplays Quiz to find out what type of roleplay you should do!",
  "B": "Your next steps: Complete the Prepared Events Quiz to find out what type of prepared event you should do!",
  "C": "Your next steps: Complete both the Roleplays and Prepared Events Quizzes to find out what type of events you should do!",
  "D": "Your next steps: Go to deca.org/challenges to look at all of the options for corporate challenges, and go to deca.org/compete to look at VBC options and the stock market game!"
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