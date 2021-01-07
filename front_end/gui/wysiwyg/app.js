/*
when we click a button
  - we call the execCommand function for that action
    - ex document.execCommand('bold');
  - then we need to toggle the button class to 'pushed' so that we know it is on
*/

let app = {
  init() {
    document.querySelector('button.bold').addEventListener('click', this.toggleBold.bind(this));
    document.querySelector('button.italicize').addEventListener('click', this.toggleItalic.bind(this));
    document.querySelector('button.underline').addEventListener('click', this.toggleUnderline.bind(this));
    document.querySelector('button.link').addEventListener('click', this.toggleLink.bind(this));
    document.querySelector('button.strikethrough').addEventListener('click', this.toggleStrikeThrough.bind(this));
    document.querySelector('button.ul').addEventListener('click', this.insertUL.bind(this));
    document.querySelector('button.ol').addEventListener('click', this.insertOL.bind(this));
    document.querySelector('button.al_left').addEventListener('click', this.alignLeft.bind(this));
    document.querySelector('button.al_right').addEventListener('click', this.alignRight.bind(this));
    document.querySelector('button.al_center').addEventListener('click', this.alignCenter.bind(this));
    document.querySelector('button.al_justify').addEventListener('click', this.alignJustify.bind(this));
    document.addEventListener('selectionchange', this.toggleButtons.bind(this));
  },

  bindEvents() {
    this.bold.addEventListener('click', this.toggleBold.bind(this));
  },

  toggleBold(event) {
    document.execCommand('bold')
    this.toggleButton(event);
  },

  toggleItalic(e) {
    document.execCommand('italic');
    this.toggleButton(e);
  },

  toggleUnderline(e) {
    document.execCommand('underline');
    this.toggleButton(e);
  },

  toggleLink() {
    let selection = document.getSelection().toString();
    let url;
    if(!selection) {
      return;
    }

    url = prompt('Enter the URL to link to:');
    this.createLink(url, e);
  },

  toggleStrikeThrough(e) {
    document.execCommand('strikeThrough');
    this.toggleButton(e);
  },

  createLink(url, e) {
    if (!url) {
      return;
    }

    document.execCommand('createLink', false, url);
    this.toggleButton(e);
  },

  insertUL: function(e) {
    document.execCommand('insertUnorderedList');
    this.toggleButton(e);
  },

  insertOL: function(e) {
    document.execCommand('insertOrderedList');
    this.toggleButton(e);
  },

  alignLeft: function(e) {
    document.execCommand('justifyLeft');
    this.toggleButton(e);
    this.toggleButtons();
  },

  alignRight: function(e) {
    document.execCommand('justifyRight');
    this.toggleButton(e);
    this.toggleButtons();
  },

  alignCenter: function(e) {
    document.execCommand('justifyCenter');
    this.toggleButton(e);
    this.toggleButtons();
  },

  alignJustify: function(e) {
    document.execCommand('justifyFull');
    this.toggleButton(e);
    this.toggleButtons();
  },

  toggleButton(event) {
    event.target.classList.toggle("pushed");
  },

    // add 'pushed' class to buttons whose actions are applied to current selection
    toggleButtons: function() {
      var isBold = document.queryCommandState('bold');
      var isItalic = document.queryCommandState('italic');
      var isUnderlined = document.queryCommandState('underline');
      var isStrokeThrough = document.queryCommandState('strikeThrough');
      var isALink = document.queryCommandState('createLink');
      var isAnOL = document.queryCommandState('insertOrderedList');
      var isAUL = document.queryCommandState('insertUnorderedList');
      var isAlignLeft = document.queryCommandState('justifyLeft');
      var isAlignRight = document.queryCommandState('justifyRight');
      var isAlignCenter = document.queryCommandState('justifyCenter');
      var isAlignJust = document.queryCommandState('justifyFull');
  
      document.querySelector('.bold').classList.toggle('pushed', isBold);
      document.querySelector('.italicize').classList.toggle('pushed', isItalic);
      document.querySelector('.underline').classList.toggle('pushed', isUnderlined);
      document.querySelector('.strikethrough').classList.toggle('pushed', isStrokeThrough);
      document.querySelector('.link').classList.toggle('pushed', isALink);
      document.querySelector('.ul').classList.toggle('pushed', isAUL);
      document.querySelector('.ol').classList.toggle('pushed', isAnOL);
      document.querySelector('.al_left').classList.toggle('pushed', isAlignLeft);
      document.querySelector('.al_right').classList.toggle('pushed', isAlignRight);
      document.querySelector('.al_center').classList.toggle('pushed', isAlignCenter);
      document.querySelector('.al_justify').classList.toggle('pushed', isAlignJust);
    },

};

app.init();
