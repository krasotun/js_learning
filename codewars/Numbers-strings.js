// DONE 7 kyu https: //www.codewars.com/kata/get-the-middle-character
/* You are going to be given a word.Your job is to
return the middle character of the word.If the word 's length is odd, return the middle character. If the word'
s length is even,
return the middle 2 characters.

# Examples:
Kata.getMiddle("test") should
return "es"
Kata.getMiddle("testing") should
return "t"
Kata.getMiddle("middle") should
return "dd"
Kata.getMiddle("A") should
return "A" */
function getMiddle(s) {
    if (s.length % 2 == 0) { // если четное
        let i = (s.length * 0.5 - 1); // получаем сколько символов отбрасывать
        return s.slice(i, s.length - i); // отбрасываем от начала и конца
    } else {
        let i = (s.length * 0.5 - 0.5);
        return s.slice(i, s.length - i);

    }
}

// 7 kyu https: //www.codewars.com/kata/absent-vowel
/* Your job is to figure out the index of which vowel is missing from a given string:

    A has an index of 0,
    E has an index of 1,
    I has an index of 2,
    O has an index of 3,
    U has an index of 4.
Examples
    "John Doe hs seven red pples under his bsket" => 0;
missing: "a"
"Bb Smith sent us six neatly arranged range bicycles" => 3;
missing: "o"

*/

function absentVowel(x) {

}

/*     7 kyu https: //www.codewars.com/kata/highest-and-lowest
  7 kyu https: //www.codewars.com/kata/jaden-casing-strings
  7 kyu https: //www.codewars.com/kata/disemvowel-trolls
  7 kyu https: //www.codewars.com/kata/isograms
  7 kyu https: //www.codewars.com/kata/nickname-generator
  7 kyu https: //www.codewars.com/kata/digits-explosion
  6 kyu https: //www.codewars.com/kata/handshake-problem
  6 kyu https: //www.codewars.com/kata/reverse-or-rotate
  6 kyu https: //www.codewars.com/kata/multiples-of-3-or-5
  */