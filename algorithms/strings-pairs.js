function wordVariants(words) {
	let wordIndex = 0;
	let wordVariantIndex = 0;
	return function getNextVariant() {
		if (wordIndex === words.length) return undefined;
		if (wordVariantIndex === words[wordIndex].length) {
			wordIndex++;
			wordVariantIndex = 0;
			return getNextVariant();
		}
		let currentVariant = words[wordIndex][wordVariantIndex];
		wordVariantIndex++;
		let result = words.slice(0, wordIndex).concat([currentVariant]).concat(words.slice(wordIndex + 1)).join(" ");
		return result;
	}
}


// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...

function allSentences(words) {
	//
}

const nextSentence = allSentences([
	['внучка', 'внучок'],
	['маша', 'махать', 'машу']
	// ... тут могут быть другие слова с любым количеством своих форм
]);

nextSentence(); // 'внучка маша'
nextSentence(); // 'внучка махать'
// ... и т. д. все комбинации
nextSentence(); // undefined