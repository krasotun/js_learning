const tweets = [
	'Какой-то странный тред',
	'Твит, адресованный Илону Маску',
	'Ответ на инфоповод'
];

function forEach(arr, callback) {
	for (let i = 0; i <= arr.length; i++) {
		callback(i);
	}
}

forEach(tweets, function (tweet) {
	console.log(tweet);
});


function handleLoadError {
	console.log('Все идет не по плану');
}


function handleImageLoad(evt) {
	// после загрузки добавим элемент изображения в DOM
	document.body.append(evt.target);
}

// дополните код функции
function loadImage(imageUrl, loadCallback, errorCallback) {
	const img = document.createElement('img');
	img.src = imageUrl;
	img.onload = loadCallback;
	img.onerror = errorCallback;
}

loadImage(
	'https://pictures.s3.yandex.net/frontend-developer/functions/dog-12345.jpg',
	handleImageLoad, handleLoadError
);
