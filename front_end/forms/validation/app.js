document.addEventListener('DOMContentLoaded', () => {
  let form = {

    bindEvents() {
      this.inputs.addEventListener('focusout', this.handleFocusOut.bind(this));
      this.inputs.addEventListener('focusin', this.handleFocus.bind(this));
      this.submit.addEventListener('click', this.handleSubmit.bind(this));
      this.inputs.addEventListener('keypress', this.handleKeyPress.bind(this));
    },

    handleKeyPress(event) {
      if (event.target === this.firstName
        || event.target === this.lastName) {
          this.handleNameKeys(event);
      }
      if ([...this.creditInputs].includes(event.target)) {
        this.handleNumberKeys(event);
        if (event.target.value.length === 3) {
          event.target.nextElementSibling.focus();
        }
      }
    },

    handleNameKeys(event) {
      if (!/[a-zA-Z'\s]/.test(event.key)) {
        event.preventDefault();
      }
    },

    handleNumberKeys(event) {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    },

    handleSubmit(event) {
      event.preventDefault();
      let inputs = [...document.querySelectorAll('input')];

      inputs.forEach(input => {
        if (input.classList.contains('error')
        || input.classList.contains('valid')
        || input.id === "phone") {
        } else {
          this.handleFocusOut({target: input});
        }
      });

      if (inputs.some(input => input.classList.contains('error'))) {
        this.formErrors.textContent = 'Form cannot be submitted until errors are corrected.';
      } else {
        let formData = new FormData(this.form);
        
        let creditFields = [...formData.entries()].filter(pair => {
          return pair[0] === "credit";
        });
        let otherFields = [...formData.entries()].filter(pair => {
          return pair[0] !== "credit";
        });

        let ccNumber = '';
        creditFields.forEach(field => {
          ccNumber += field[1];
        });

        otherFields.push(["credit", ccNumber]);
        let searchParams = new URLSearchParams(otherFields);
        this.requestBody.textContent = searchParams.toString();
      }
    },

    handleFocus(event) {
      let input = event.target;
      if (input === this.submit) {
        return;
      }
      let errorMessage = this.getErrorMessage(input);
      errorMessage.textContent = '';
      input.classList.remove('error');
    },

    handleFocusOut(event) {
      let input = event.target;
      let errorMessage;

      if (input === this.submit) {
        return;
      }

      if (input === this.phone) {
        errorMessage = 'Please enter a valid phone number.'
        this.validate(input, errorMessage);
      } else if (input === this.email) {
        errorMessage = `${input.value} is not a valid email address.`;
        this.validate(input, errorMessage);
      } else if (input === this.password) {
        errorMessage = `Password must be at least 10 characters. Yours is ${input.value.length}.`;
        this.validate(input, errorMessage);
      } else if (input === this.firstName || input === this.lastName) {
        this.validate(input);
      } else if ([...this.creditInputs].includes(input)) {
        errorMessage = "You must have 4 numbers in this field.";
        this.validate(input, errorMessage);
      }
    },

    validate(input, message) {
      let errorMessage = this.getErrorMessage(input);

      if (input.validity.valueMissing) {
        errorMessage.textContent = `${this.getLabel(input)} is a required field.`;
      }
      if (input.validity.patternMismatch) {
        errorMessage.textContent = message;
      } 

      if (errorMessage.textContent.length > 0) {
        input.classList.add('error');
        input.classList.remove('valid');
      } else {
        input.classList.add('valid');
        input.classList.remove('error');
      }
    },

    getLabel(input) {
      return input.parentNode.previousElementSibling.firstElementChild.textContent;
    },

    getErrorMessage(input) {
      return input.closest('dd').querySelector('.error_message');
    },

    init() {
      this.inputs = document.querySelector('dl');
      this.firstName = document.querySelector("#first_name");
      this.lastName = document.querySelector("#last_name");
      this.email = document.querySelector("#email");
      this.phone = document.querySelector("#phone");
      this.password = document.querySelector("#password");
      this.submit = document.querySelector("button");
      this.formErrors = document.querySelector('.form_errors');
      this.creditInputs = document.querySelectorAll('input[name="credit"]');
      this.form = document.querySelector('form');
      this.requestBody = document.querySelector('#request_body');
      console.log(this.creditInputs);
      this.bindEvents();
    },
  };

  form.init();
});



