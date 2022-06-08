function wait(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(resolve(), ms);
	})

}
wait(2000)
	.then(() => console.log('Прошло 2000мс'));