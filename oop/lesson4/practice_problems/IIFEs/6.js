function countdown(start) {
  (function logger(start) {
    console.log(start);
    if (start === 0) {
      console.log('Done!');
      return; 
    }
    logger(start - 1);
  })(start);
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