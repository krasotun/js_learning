function makeConsoleMessage(text) {
	function consoleMessage(newText) { // добавьте функции параметр
		console.log(newText); // и используйте его в вызове console.log
	}

	return consoleMessage;
}

const consoleHello = makeConsoleMessage('Привет, ');
const consoleGoodBye = makeConsoleMessage('Пока, ');
const consoleHemingway = makeConsoleMessage('Прощай, ');

consoleHello('Андрей'); // "Привет, Андрей"
consoleGoodBye('Ирина'); // "Пока, Ирина"
consoleHemingway('оружие!'); // "Прощай, оружие!"


