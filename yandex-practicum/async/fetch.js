fetch("https://api.kanye.rest")
	.then((res) => {
		console.log(res);
	}
	)



// создаёт разметку для поста
function createPostMarkup(post) {
	return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
	container.insertAdjacentHTML('afterbegin', markup);
}

function getPosts() {
	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(posts => {
			posts.forEach((post) => {
				addPostToDOM(container, createPostMarkup(post));
			});
		});
}

getPosts();


function createPost(newPost) {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST', // нужно указать метод запроса
		// тело запроса
		body: JSON.stringify({
			title: newPost.title,
			body: newPost.body
		}),
		// и заголовки
		headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		}
	})
		.then(res => res.json())
		.then((post) => {
			addPostToDOM(document.querySelector('.container'), createPostMarkup(post))
		}

