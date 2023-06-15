const scores = [
  [3, 7],
  [4, 1],
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];

const series = (games) => {
  let canWins = 0;
  let rusWins = 0;

  for (const game of games) {
    if (game[0] > game[1]) {
      canWins++;
    } else if (game[1] > game[0]) {
      rusWins++;
    } else continue;
  }

  if (rusWins > canWins) {
    return "ussr";
  } else if (canWins > rusWins) {
    return "canada";
  }

  return null;
};

console.log(series(scores));
