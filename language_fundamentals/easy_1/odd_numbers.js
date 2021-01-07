var i;

for (i = 1; i < 100; i += 2) {
  console.log(i);
}

function logOdds(lower, upper) {
  if (lower % 2 !== 1 || upper % 2 !== 1) {
    lower += 1;
    upper -= 1;
  }

  i = lower;
  while (i <= upper) {
    console.log(i);
    i += 2;
  }
}

logOdds(6, 44);
