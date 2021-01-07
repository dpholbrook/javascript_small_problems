
/*
when the dom loads, populate shortened languages from collection

register click event listener on all language article div button (delegate)
  - language clicked is current target > h2 value (name)
  - filter languages by name
  - pass language object to the language tmplate
  - now we have long description html
  - remove short description
  - insert long description html


*/

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

document.addEventListener('DOMContentLoaded', () => {
  let languagesTemplate = Handlebars.compile($('#languages-template').html());
  let languageTemplate = Handlebars.compile($('#language-template').html());
  Handlebars.registerPartial('languageTemplate', $('#language-template').html());

  let languagesContainer = document.querySelector('#languages');
  let shortDescriptions = shorten(languages);
  languagesContainer.innerHTML = languagesTemplate({items: shortDescriptions});

  languagesContainer.addEventListener('click', event => {
    if (event.target.classList.contains('button')) {
      let button = event.target;
      let languageElement = event.target.closest('article');
      let descriptionContainer = languageElement.querySelector('.description-container');
      let languageName = languageElement.querySelector('.name').textContent;
      let languageObject = getLanguage(languageName, languages);

      if (button.classList.contains('show-more')) {
        descriptionContainer.innerHTML = languageTemplate(languageObject);
        button.textContent = 'Show Less';
        button.classList.toggle('show-more');
        button.classList.toggle('show-less');
      } else if (button.classList.contains('show-less')) {
        let shortenedLanguage = getLanguage(languageName, shortDescriptions);
        descriptionContainer.innerHTML = languageTemplate(shortenedLanguage);
        button.textContent = 'Show More';
        button.classList.toggle('show-more');
        button.classList.toggle('show-less');
      }
    };
  });  
});

/*
if it was the button that was clicked

if show more was clicked
  - toggle class and text content to show less
  - display more
    - remove .description
    - text content of .description-container is from language template
*/

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
