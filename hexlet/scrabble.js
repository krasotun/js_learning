// const scrabble = (symbols, word) => {
//   let heap = symbols;
//   for (const symbol of word.toLowerCase()) {
//     if (heap.indexOf(symbol) === -1) {
//       return false;
//     }
//     heap = heap.replace(symbol, "");
//   }
//   return true;
// };

const scrabble = (symbols, word) => {
  const map = {};

  for (const symbol of symbols) {
    if (map.hasOwnProperty(symbol)) {
      map[symbol] += 1;
    } else {
      map[symbol] = 1;
    }
  }

  for (const symbol of word.toLowerCase()) {
    if (map[symbol] === 0 || map[symbol] === undefined) {
      return false;
    } else {
      map[symbol] -= 1;
    }
  }

  return true;
};

console.log(scrabble("scriptjavest", "javascript"));

//  Создайте объект с количеством букв из набора символов.
// Попробуйте написать на листочке набор букв и слово.
//  Как бы вы стали проверять, можно ли составить это слово из предложенного набора букв?
//  Наверняка, стали бы просматривать слово побуквенно,
//  проверять, есть ли эта буква в наборе и, если есть, вычеркивать её из набора.
//  Если в процессе выяснится, что какой-то буквы в наборе не хватает,
//  то слово составить нельзя. И здесь такой же принцип.
//  Нужно просматривать слово и "вычеркивать" буквы из объекта (т.е. уменьшать на единицу их количество)
