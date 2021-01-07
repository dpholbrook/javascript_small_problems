document.addEventListener('DOMContentLoaded', () => {
  let centisecondsElement = document.querySelector('#centisecs');
  let secondsElement = document.querySelector('#secs');
  let minutesElement = document.querySelector('#mins');
  let hoursElement = document.querySelector('#hours')
  let startStopButton = document.querySelector('#start-stop'); 
  let resetButton = document.querySelector('#reset');

  function Stopwatch() {
    this.interval = null;
    this.centiseconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.seconds = 0;
    this.bindEvents();
  }

  Stopwatch.prototype = {
    updateStopwatch() {
      this.centiseconds += 1;

      if (this.centiseconds === 100) {
        this.centiseconds = 0;
        this.seconds += 1;

        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes += 1;

          if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
          };
        };
      };
      
      this.displayTime();
    },
    displayTime() {
      centisecondsElement.textContent = this.padStart(this.centiseconds);
      secondsElement.textContent = this.padStart(this.seconds);
      minutesElement.textContent = this.padStart(this.minutes);
      hoursElement.textContent = this.padStart(this.hours);
    },
    handleStart() {
      if (startStopButton.classList.contains('start')) {
        this.interval = setInterval(() => {
          this.updateStopwatch();
        }, 10);
      } else if (startStopButton.classList.contains('stop')) {
        clearInterval(this.interval);
      }
      this.toggleStartStop();
    },
    toggleStartStop() {
      startStopButton.classList.toggle('start');
      startStopButton.classList.toggle('stop');
      startStopButton.textContent = startStopButton.textContent === 'Start' ? 'Stop' : 'Start';
    },
    bindEvents() {
      startStopButton.addEventListener('click', this.handleStart.bind(this));
      resetButton.addEventListener('click', this.handleReset.bind(this));
    },
    handleReset() {
      clearInterval(this.interval)
      this.centiseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;

      if (startStopButton.textContent === 'Stop') {
        this.toggleStartStop();
      };      

      this.displayTime();
    },
    padStart(number) {
       return `${number}`.length < 2 ? `0${number}` : `${number}`;
    },
  };
  new Stopwatch();
});
/*
when we click start, milliseconds increments every milisecond
if button class and content is 'stop'
  when we click resetButton, we want to change that content and class to 'start'
if class and content is start
  - resetButton should leave them as start
*/