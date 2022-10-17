// Приватный Proxy
// Напишите конструктор proxyProps со следующими особенностями:
// В нём запрещён доступ к методам и свойствам,
// 	которые начинаются с _.В случае ошибки доступа выводится текст «Нет прав».
// Остальные свойства можно получать, изменять и удалять.
const props = {
	name: 'Abby',
	chat: 'the last of us. Part II',
	getChat() {
		this._privateMethod();
	},
	_privateMethod() {
		console.log(this._privateProp);
	},
	__privateMethodToo() { },
	_privateProp: 'Нельзя получить просто так',
};

const proxyProps = new Proxy(props, {
	get(target, prop) {
		if (prop.startsWith('_')) {
			console.log('Нет прав');
		} else {
			let value = target[prop];
			console.log(value);
			return (typeof value === 'function') ? value.bind(target) : value; // (*)
		}
	},
	set(target, prop, val) { // перехватываем запись свойства
		if (prop.startsWith('_')) {
			console.log('Error: Нет прав');
		} else {
			target[prop] = val;
			return true;
		}
	},
	deleteProperty(target, prop) { // перехватываем удаление свойства
		if (prop.startsWith('_')) {
			console.log('Error: Нет прав');
		} else {
			delete target[prop];
			return true;
		}
	},
	ownKeys(target) { // перехватываем попытку итерации
		return Object.keys(target).filter(key => !key.startsWith('_'));
	}
});
proxyProps.getChat();
delete proxyProps.chat;
proxyProps.newProp = 2;
console.log(proxyProps.newProp);
try {
	proxyProps._newPrivateProp = 'Super game';
} catch (error) {
	console.log(error);
}
try {
	delete proxyProps._privateProp;
} catch (error) {
	console.log(error); // Error: Нет прав
}
/*
	* Вывод в консоль следующий:
Нельзя получить просто так
2
Error: Нет прав
Error: Нет прав
*/
