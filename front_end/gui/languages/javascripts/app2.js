const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];




document.addEventListener('DOMContentLoaded', () => {
  let languageTemplate = Handlebars.compile($('#language-template').html());
  let languagesContainer = document.querySelector('#languages');
  let shortDescriptions = shorten(languages);
  shortDescriptions.forEach(language => {
    let languageHtml = languageTemplate(language);
    languagesContainer.insertAdjacentHTML('beforeend', languageHtml)
  });

  languagesContainer.addEventListener('click', event => {
    if (event.target.classList.contains('button')) {
      let button = event.target;
      let languageElement = event.target.closest('article');
      let languageName = languageElement.getAttribute('data-id');
      let newLanguageContent = document.createElement('div');

      if (button.classList.contains('show-more')) {
        let languageObject = getLanguage(languageName, languages);
        newLanguageContent.innerHTML = languageTemplate(languageObject);
        languagesContainer.replaceChild(newLanguageContent, languageElement);
        button.textContent = 'Show Less';
        button.classList.toggle('show-more');
        button.classList.toggle('show-less');
      } else if (button.classList.contains('show-less')) {
        let shortenedLanguage = getLanguage(languageName, shortDescriptions);
        newLanguageContent.innerHTML = languageTemplate(shortenedLanguage);
        languageElement.parentNode.replaceChild(newLanguageContent, languageElement);
        // descriptionContainer.innerHTML = languageTemplate(shortenedLanguage);
        button.textContent = 'Show More';
        button.classList.toggle('show-more');
        button.classList.toggle('show-less');
      }
    };
  });  
});

function shorten(languages) {
  return languages.map(language => {
    let result = {};
    result.name = language.name;
    result.description = language.description.slice(0, 121) + '...';
    return result;
  });
}

function getLanguage(languageName, languages) {
  return languages.filter(language => language.name === languageName)[0];
}


