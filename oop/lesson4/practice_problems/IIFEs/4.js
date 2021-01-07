function countdown(from) {
  (function() {
    for(let i = from; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!');
  })();
}

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!