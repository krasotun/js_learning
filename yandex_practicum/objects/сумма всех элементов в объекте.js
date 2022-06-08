const heights = {
	burjKhalifa: 828,
	tokyoSkyTree: 634,
	shanghaiTower: 632,
	abrajAlBait: 601,
	cantonTower: 600,
	pingAnFinanceCentre: 600,
	lotteWorldTower: 555,
	cnTower: 553,
	oneWorldTradeCenter: 541,
	ostankinoTower: 540
};
const stratoHeight = 11000;
let sum = 0;
const sumHeights = () => {
	Object.values(heights).forEach(item => {
		sum += item;
	});
	return sum
};
console.log(sumHeights());
console.log(sumHeights >= stratoHeight);