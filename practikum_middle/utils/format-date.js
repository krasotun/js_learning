const incoming = [{ name: "Марат", time: "2022-11-21T14:25:31+00:00" }, { name: "Петя", time: '2022-11-22T06:43:37+00:00' }]

const changeArray = (array) => {
	array.forEach((item) => {
		const time = new Date(item.time)
		item.time = time.toLocaleTimeString()
	})
}

changeArray(incoming);
console.log(incoming);