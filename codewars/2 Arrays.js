/*  7 kyu https: //www.codewars.com/kata/head-tail-init-and-last
 6 kyu https: //www.codewars.com/kata/array-deep-count
 6 kyu https: //www.codewars.com/kata/valid-string
 6 kyu https: //www.codewars.com/kata/vasya-clerk
 6 kyu https: //www.codewars.com/kata/sorting-by-bits */


const array = [1, 10, 1, 2, 1, 5, 1, 5, 12, 3, 1, 1]
console.log(array.filter(findOne => findOne > 1).length);

const symbols = ['Marat', 'Elena', 'Daria', 'Irina', 'Irana']
const filterSymbols = (array, symbols) => {
	return array.filter(element => element.toLowerCase().indexOf(symbols.toLowerCase()) !== -1)
}

const filterItems = (arr, query) => {
	return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterSymbols(symbols, 'ar')); // ['Marat', 'Daria', 'Irana']
console.log(filterItems(symbols, 'ar')); // ['Marat', 'Daria', 'Irana']


const cards = [{ likes: Array(2), _id: '62a0e7e17714be031be108ad', name: 'Жак-Ив-Кусто алоуцалоцруа', link: 'https://images.unsplash.com/photo-1634789968768-35…Hx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(3), _id: '62a0df747714be031be0f5d1', name: 'ds', link: 'https://images.unsplash.com/photo-1650964996672-05…fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
{ likes: Array(1), _id: '62a0df107714be031be0f55a', name: 'Вячеслав', link: 'https://images.unsplash.com/photo-1650964996672-05…fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
{ likes: Array(0), _id: '62a0ddf2f2b1ce03034860ed', name: 'asadsdsdsdasdasd', link: 'https://images.unsplash.com/photo-1651017810068-a6…lbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(2), _id: '62a0d80ff2b1ce0303484a9f', name: 'Вячеслав', link: 'https://images.unsplash.com/photo-1650964996672-05…fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
{ likes: Array(1), _id: '62a0958672e3af02c8fd5f65', name: 'https://images.unsplash.com/ph', link: 'https://images.unsplash.com/pMH0' },
{ likes: Array(1), _id: '62a079837714be031bdf8894', name: 'https://images.unsplash.com/ph', link: 'https://images.unsplash.com/pMH0' },
{ likes: Array(1), _id: '62a0796df2b1ce0303470258', name: 'https://images.unsplash.com/ph', link: 'https://images.unsplash.com/photo-1557672172-298e0…ufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(3), _id: '62a073e1f2b1ce030346f034', name: 'Nature', link: 'https://images.unsplash.com/photo-1477414348463-c0…XxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(3), _id: '62a073c172e3af02c8fd0647', name: 'Night', link: 'https://images.unsplash.com/photo-1498036882173-b4…ufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(3), _id: '62a07350f2b1ce030346effb', name: 'red', link: 'https://images.unsplash.com/photo-1494633114655-81…ufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(2), _id: '62a0732172e3af02c8fd05ef', name: 'JP', link: 'https://images.unsplash.com/photo-1554797589-7241b…wYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(0), _id: '62a061487714be031bdf5c1f', name: 'Париж', link: 'https://images.unsplash.com/photo-1654600705644-a5…xOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60' },
{ likes: Array(1), _id: '62a047d77714be031bdf011f', name: "I'm done - I'm out", link: 'https://avatarko.ru/img/kartinka/9/film_Joker_8875.jpg' },
{ likes: Array(1), _id: '62a047b0f2b1ce0303467c28', name: 'Test deploy', link: 'https://avatarko.ru/img/kartinka/17/film_pirat_16269.jpg' },
{ likes: Array(4), _id: '629fb38c7714be031bde6521', name: 'dog', link: 'https://images.unsplash.com/photo-1632650950737-83…XxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(5), _id: '629fb0cd72e3af02c8fbf0b5', name: 'Work, please', link: 'https://avatarko.ru/img/kartinka/25/zhivotnye_kotenok_24632.jpg' },
{ likes: Array(4), _id: '629fb099f2b1ce030345da4c', name: 'one more test', link: 'https://avatarko.ru/img/kartinka/13/zhivotnye_kot_12253.jpg' },
{ likes: Array(3), _id: '629fb0377714be031bde614c', name: 'Test React add place', link: 'https://avatarko.ru/img/kartinka/32/zhivotnye_kot_31441.jpg' },
{ likes: Array(2), _id: '629fa9eb72e3af02c8fbd9a8', name: 'dd', link: 'https://images.unsplash.com/photo-1654543974011-37…3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60' },
{ likes: Array(2), _id: '629fa9b572e3af02c8fbd864', name: 'Paris', link: 'https://images.unsplash.com/photo-1654600705644-a5…xOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60' },
{ likes: Array(2), _id: '629fa18d7714be031bde2f74', name: 'cat', link: 'https://images.unsplash.com/photo-1600620025592-b5…ufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
{ likes: Array(3), _id: '629f8c62f2b1ce0303457900', name: 'Проклятое место', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
{ likes: Array(3), _id: '629f6b6d72e3af02c8fb34b6', name: 'Проклятое место', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' },
{ likes: Array(9), _id: '629f183e72e3af02c8fa85af', name: 'Собор Парижской Богоматери', link: 'https://bigenc.ru/media/2016/10/27/1237298102/26385.jpg' },
{ likes: Array(6), _id: '629eba147714be031bdccf8f', name: 'dsbvjh', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' },
{ likes: Array(3), _id: '629eb8ee7714be031bdccf68', name: 'dvs', link: 'https://slovnet.ru/wp-content/uploads/2018/11/14-35.jpg' },
{ likes: Array(4), _id: '629e89e77714be031bdcc9b8', name: '612', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' },
{ likes: Array(4), _id: '629e5f4772e3af02c8fa1f95', name: 'Жак-', link: 'https://poisknews.ru/wp-content/uploads/2019/09/shutterstock_340405046.jpg' },
{ likes: Array(4), _id: '629e4f9772e3af02c8f9da37', name: 'test', link: 'https://adakosowska.pl/wp-content/uploads/2021/06/IMG_3551-1440x960.jpg' }]


const filterCards = (arr, query) => {
	return arr.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterCards(cards, 'место'));