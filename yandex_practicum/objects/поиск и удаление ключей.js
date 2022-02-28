const mya = {
	'бремя': 'burden',
	'время': 'time',
	'вымя': 'udder',
	'мяч': 'ball',
	'знамя': 'banner',
	'имя': 'name',
	'мясо': 'meat',
};



Object.keys(mya).forEach(key => {
	if (!key.endsWith('мя')) {
		delete mya[key];
	}
});

console.log(mya);