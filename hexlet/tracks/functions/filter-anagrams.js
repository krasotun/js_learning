// filterAnagrams.js
// Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова.
// Функция принимает исходное слово и список для проверки (массив),
// а возвращает массив всех анаграмм. Если в списке слов отсутствуют анаграммы,
// то возвращается пустой массив.

const filterAnagrams = (word, array) => {
  const isAnagram = (word1, word2) => {
    if (word1.length !== word2.length) {
      return false;
    }

    return word1.split("").sort().join() === word2.split("").sort().join();
  };

  return [...array].filter((element) => isAnagram(word, element));
};

console.log(filterAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
// ['aabb', 'bbaa']

console.log(
  filterAnagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
);
// ['carer', 'racer']

console.log(filterAnagrams("laser", ["lazing", "lazy", "lacer"]));
// []
