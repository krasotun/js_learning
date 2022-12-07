/**
 * Генерация HTML списка чатов
 * @param {Chat[]} chats
 * @return {HTMLUListElement}
 */
function makeChatsList(chats) {
	const parent = document.createElement('ul');
	chats.map((chat) => {
		const li = document.createEvent('li');
		li.innerHtml = `<li>Название: ${chat.title} Последенее сообщение: ${chat.lastMessage}</li>`;
		parent.appendChild(li)
	})
	return parent;
}