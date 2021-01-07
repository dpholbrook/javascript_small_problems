const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

const quizApp = {
  checkAnswers(event) {
    console.log("checkAnswers");
    event.preventDefault();
    let formData = new FormData(this.form);
    let answers = formData.values();
    console.log(answers);

    [...this.form.children].forEach(question => {
      let input = question.querySelector('input');
      if (input.checked) {
        console.log(input.getAttribute('data.id'));
      }
    });
/*
we are iterating through array of question objects
for each object 
    - get the corresponding question with the id
*/
    questions.forEach(question => {
      let id = question.id;
      let questionElement = document.querySelector(`div.question[data-id="${id}"]`)
      let message = questionElement.querySelector('p.message');
      let radioButtons = document.querySelectorAll(`input[name="${id}"]`);
      let checked = [...radioButtons].find(radioButton => radioButton.checked);
      // console.log(question.id);
      // console.log(answerKey[id]);
      
      if (checked === undefined) {
        message.textContent = `You didn't answer this question. Correct answer is "${answerKey[id]}"`;
        message.classList.add('incorrect');
        // console.log('not answered');
      } else if (answerKey[id] === checked.value) {
        message.textContent = "Correct Answer";
        message.classList.add('correct');
      } else {
        message.textContent = `Wrong answer. The correct answer is: "${answerKey[id]}"`;
        message.classList.add('incorrect');
        
        // console.log(checked.value);
        // console.log('incorrect');
      }
    });

    //iterate through the answers
    // if answer is null then set the error message for question
    //if answer is correct set error message for question
    //if answer is incorrect set error message for question
  },
  
  resetForm(event) {
    event.preventDefault();
    console.log(this.form);
    this.form.reset();
  },

  init() {
    this.quizTemplate = Handlebars.compile(document.querySelector('#quiz_template').innerHTML);
    this.quiz = this.quizTemplate({questions});
    document.body.insertAdjacentHTML('afterend', this.quiz);
    this.submitButton = document.querySelector("#submitForm");
    console.log("submitButton", this.submitButton);
    this.resetButton = document.querySelector("#resetForm");
    this.form = document.querySelector("#quiz");
    this.bind();
  },

  bind() {
    this.submitButton.addEventListener("click", this.checkAnswers.bind(this));
    this.resetButton.addEventListener("click", this.resetForm.bind(this));
  },
};

document.addEventListener('DOMContentLoaded', () => {
  quizApp.init();
});