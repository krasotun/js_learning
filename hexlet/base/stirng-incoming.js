//  функцию, которая заменяет каждое вхождение указанных слов в предложении
//  на последовательность $#%! и возвращает полученную строку. Аргументы:

// Текст
// Набор стоп слов
// Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).
const sentence = "When you play the game of thrones, you win or you die";

const replacer = (sentence, words) => {
  const wordsFromSentence = sentence.split(" ");

  const changer = (wordForChange) => {
    for (let word of wordsFromSentence) {
      if (word === wordForChange) {
        wordsFromSentence[wordsFromSentence.indexOf(word)] = "$#%!";
      }
    }
  };

  for (const word of words) {
    if (wordsFromSentence.includes(word)) {
      changer(word);
    }
  }
};

replacer(sentence, ["die", "play"]);
