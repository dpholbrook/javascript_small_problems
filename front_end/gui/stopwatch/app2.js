document.addEventListener('DOMContentLoaded', () => {
  let stopwatchElement = document.querySelector('#stopwatch');
  let centiseconds = document.querySelector('#centisecs');
  let startStop = document.querySelector('#start-stop'); 
  let reset = document.querySelector('#reset');
  let currentSeconds = 0;
  let currentMinutes = 0;
  let currentHours = 0;
  function Stopwatch() {
  }
  Stopwatch.prototype = {
    init() {
      this.interval = null;
      // this.start = new Date();
      this.centiseconds = 0;
      this.minutes = currentMinutes
      this.hours = currentHours;
      this.seconds = currentSeconds
      // this.startStop = startStop;
      this.reset = reset;
      this.bindEvents();
    },
    csToTime(duration) {
      var centiseconds = parseInt((duration % 100) / 1),
        seconds = Math.floor((duration / 100) % 60),
        minutes = Math.floor((duration / (100 * 60)) % 60),
        hours = Math.floor((duration / (100 * 60 * 60)) % 24);
    
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      centiseconds = (centiseconds < 10) ? "0" + centiseconds : centiseconds 
    
      return hours + ":" + minutes + ":" + seconds + ":" + centiseconds;
    },
    handleStart() {
      if (startStop.classList.contains('start')) {
        this.interval = setInterval(() => {
          this.centiseconds += 1;
          stopwatchElement.textContent = this.csToTime(this.centiseconds);
        }, 10);
      } else if (startStop.classList.contains('stop')) {
        clearInterval(this.interval);
      }
      this.toggleStartStop();
    },
    toggleStartStop() {
      startStop.classList.toggle('start');
      startStop.classList.toggle('stop');
      startStop.textContent = startStop.textContent === 'Start' ? 'Stop' : 'Start';
    },
    bindEvents() {
      startStop.addEventListener('click', this.handleStart.bind(this));
      reset.addEventListener('click', this.handleReset.bind(this));
    },
    handleReset() {
      this.centiseconds = 0
      clearInterval(this.interval)
      stopwatchElement.textContent = '00:00:00:00'
      if (startStop.textContent === 'Stop') {
        this.toggleStartStop();
      };      
    },
    handleTime(element, time) {
      element.textContent = this.padStart(time);
    },
    padStart(number) {
       return `${number}`.length < 2 ? `0${number}` : `${number}`
    },
  };
  new Stopwatch().init();
});
/*
when we click start, milliseconds increments every milisecond
if button class and content is 'stop'
  when we click reset, we want to change that content and class to 'start'
if class and content is start
  - reset should leave them as start
*/