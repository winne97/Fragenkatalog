const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answer: [
      {
        id: "a",
        text: "Hamburg",
        correct: false,
      },
      {
        id: "b",
        text: "München",
        correct: false,
      },
      {
        id: "c",
        text: "Berlin",
        correct: true,
      },
      {
        id: "d",
        text: "Hannover",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Was ist die Hauptstadt von Frankreich?",
    answer: [
      {
        id: "a",
        text: "Paris",
        correct: true,
      },
      {
        id: "b",
        text: "Marseille",
        correct: false,
      },
      {
        id: "c",
        text: "Lyon",
        correct: false,
      },
      {
        id: "d",
        text: "Bordeaux",
        correct: false,
      },
    ],
  },
];

let currentObjectId = 0;
let currentQuestion;

const displaySection = document.getElementById("questionJava");

function questionRendern() {
  currentQuestion = questions.find((obj) => obj.id === currentObjectId);

  displaySection.innerHTML = "";

  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question");

  const questionHeader = document.createElement("h1");
  questionHeader.textContent = currentQuestion.question;
  questionDiv.appendChild(questionHeader);

  displaySection.appendChild(questionHeader);

  const answerA = currentQuestion.answer.find((ans) => ans.id === "a");
  const answerB = currentQuestion.answer.find((ans) => ans.id === "b");
  const answerC = currentQuestion.answer.find((ans) => ans.id === "c");
  const answerD = currentQuestion.answer.find((ans) => ans.id === "d");

  const questionAnswers = document.createElement("div");
  questionAnswers.setAttribute("class", "antworten");
  const questionButtonA = document.createElement("button");
  questionButtonA.setAttribute("class", "antwort");
  questionButtonA.setAttribute("id", "a");
  questionButtonA.setAttribute("onclick", "showAnswer(`a`)");
  questionButtonA.textContent = answerA.text;
  questionAnswers.appendChild(questionButtonA);

  const questionButtonB = document.createElement("button");
  questionButtonB.setAttribute("class", "antwort");
  questionButtonB.setAttribute("id", "b");
  questionButtonB.setAttribute("onclick", "showAnswer(`b`)");
  questionButtonB.textContent = answerB.text;
  questionAnswers.appendChild(questionButtonB);

  const questionButtonC = document.createElement("button");
  questionButtonC.setAttribute("class", "antwort");
  questionButtonC.setAttribute("id", "c");
  questionButtonC.setAttribute("onclick", "showAnswer(`c`)");
  questionButtonC.textContent = answerC.text;
  questionAnswers.appendChild(questionButtonC);

  const questionButtonD = document.createElement("button");
  questionButtonD.setAttribute("class", "antwort");
  questionButtonD.setAttribute("id", "d");
  questionButtonD.setAttribute("onclick", "showAnswer(`d`)");
  questionButtonD.textContent = answerD.text;
  questionAnswers.appendChild(questionButtonD);

  displaySection.appendChild(questionAnswers);
}

function chanceQuestion() {
  if (currentObjectId < questions.length) {
    currentObjectId = currentObjectId + 1;
  } else {
    currentObjectId = 1;
  }

  questionRendern();
}

function showAnswer(answerId) {
  const correctAnswer = currentQuestion.answer.find((answer) => {
    return answer.correct;
  });

  if (correctAnswer.id === answerId) {
    alert("RICHTIG");
    document.getElementById(answerId).classList.add("true");
  } else {
    alert("FALSCH");
    document.getElementById(answerId).classList.add("false");
    document.getElementById(correctAnswer.id).classList.add("true");
  }
}

function showSolution() {
  const correctAnswer = currentQuestion.answer.find((answer) => {
    return answer.correct;
  });
  document.getElementById(correctAnswer.id).classList.add("true");
}
