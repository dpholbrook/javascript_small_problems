// The Franchise
// The method franchise.allMovies is supposed to return the following array:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]
// Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies());

// Within our all movies method, our callback function loses its context so this is the globabl object.
// We want this to be the franchise object
// We can use an arrow function to solve this
// Arrow functions evaluate this based on scope, not execution context

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(number => {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies());

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies());



