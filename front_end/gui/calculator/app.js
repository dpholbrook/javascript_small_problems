document.addEventListener('DOMContentLoaded', () => {
  let app = {
    init() {
      this.entryElement = document.querySelector('#entry');
      this.operationElement = document.querySelector('#operation');
      this.number = 0;
      this.result = 0;
      this.stack = [];
      this.operation = '+';
      this.buttons = document.querySelector('#buttons');
      this.calculated = true;
      this.bindEvents();
    },

    bindEvents() {
      this.buttons.addEventListener('click', this.handleClick.bind(this));
    },

    handleClick(event) {
      console.log('click');
      if (event.target.classList.contains('digit')) {
        this.handleDigit(event);
      } else if (event.target.id === 'ce') {
        this.handleCe();
      } else if (event.target.classList.contains('op')) {
        this.handleOperation(event);
      } else if (event.target.classList.contains('result_button')) {
        this.handleResultButton();
      } else if (event.target.id === 'c') {
        this.handleC();
      } else if (event.target.id === 'neg') {
        this.handleNeg();
      } else if (event.target.classList.contains('dot')) {
        this.handleDot(event);
      }
      // this.renderScreen();
    },

    handleDot(event) {
      let dot = event.target.textContent.trim();
      if (!this.entryElement.textContent.includes('.')) {
        this.entryElement.textContent = this.entryElement.textContent + dot;
      }
    },

    handleNeg() {
      let entry = this.entryElement.textContent
      if (entry[0] === '-') {
        this.entryElement.textContent = entry.slice(1);
      } else {
        this.entryElement.textContent = '-' + entry;
      }
    },

    handleCe() {
      console.log('ce');
      this.stack = [];
      this.result = 0;
      this.number = 0;
      this.entryElement.textContent = 0;
      this.operationElement.textContent = this.stack.join(' '); 
      this.calculated = true;
    },

    handleC() {
      this.number = 0;
      this.entryElement.textContent = 0;
      this.calculated = true;
    },

    handleResultButton() {
      this.number = this.entryElement.textContent.trim();
      this.result = this.calculateResult();
      this.entryElement.textContent = this.result;
      this.result = 0;
      this.stack = [];
      this.operationElement.textContent = this.stack.join(' '); 
    },

    handleDigit(event) {
      let digit = event.target.textContent.trim();
      if (this.calculated === true) {
        this.entryElement.textContent = '';
      }
       
      this.entryElement.textContent = this.entryElement.textContent + digit;
      this.calculated = false;
    },

    handleOperation(event) {
      let operation = event.target.textContent;
      this.number = this.entryElement.textContent.trim();
      this.result = this.calculateResult();
      this.entryElement.textContent = this.result;
      this.stack.push(this.number);
      this.stack.push(operation);
      this.operation = operation;
      this.operationElement.textContent = this.stack.join(' ');
      this.calculated = true;
    },

    calculateResult() {
      let operations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
        '%': (num1, num2) => num1 % num2,
      };

      let calculate = operations[this.operation];
      return calculate(this.result, parseFloat(this.number));
    },
  };

  app.init();
});
