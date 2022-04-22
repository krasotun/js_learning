const aladdinSane = {
	artist: 'David Bowie',
	album: 'Aladdin Sane',
	year: 1973,
	tracks: {
		'Watch That Man': '4:30',
		'Aladdin Sane': '5:06',
		'Drive-In Saturday': '4:33',
		'Panic in Detroit': '4:25',
		'Cracked Actor': '3:01',
		'Time': '5:15',
		'The Prettiest Star': '3:31',
		"Let's Spend the Night Together": '3:10',
		'The Jean Genie': '4:07',
		'Lady Grinning Soul': '3:54'
	}
};
const aladdinSaneCopy = Object.assign({}, aladdinSane, {
	tracks: Object.assign({}, aladdinSane.tracks)
}); // ваш код здесь
console.log(aladdinSane.tracks === aladdinSaneCopy.tracks); // false