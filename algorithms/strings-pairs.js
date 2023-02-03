function allSentences(words) {
	const indexes = words.map(() => 0);

	return function () {
		if (indexes[0] === words[0].length) {
			return undefined;
		};

		const sentence = indexes
			.map((caseIndex, wordIndex) => words[wordIndex][caseIndex])
			.join(' ');

		let i = indexes.length - 1;
		while (i >= 0) {
			indexes[i]++;
			if (indexes[i] === words[i].length) {
				if (i === 0) {
					break;
				};

				indexes[i] = 0;
				i--;
				continue;
			}
			break;
		}

		return sentence;
	}
}

const nextSentence = allSentences([
	['внучка', 'внучок'],
	['маша', 'махать', 'машу',]
	// ... тут могут быть другие слова с любым количеством своих форм
]);