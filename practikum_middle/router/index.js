class Block {
	getContent() { }

	show() {
		console.log('show');
	}

	hide() {
		console.log('hide');
	}
}

class Button extends Block {
	getContent() {
		return 'Button';
	}
}

function isEqual(lhs, rhs) {
	return lhs === rhs;
}

function render(query, block) {
	const root = document.querySelector(query);
	root.textContent = block.getContent();
	return root;
}

class Route {
	constructor(pathname, view, props) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._props = props;
	}

	navigate(pathname) {
		if (this.match(pathname)) {
		}
	}

	leave() {
	}

	match(pathname) {
		return isEqual(pathname, this._pathname);
	}

	render() {
	}
}

const route = new Route('/buttons', Button, {
	rootQuery: '.app',
});

route.render();

console.log(route._pathname, route._props); // /buttons, {rootQuery: '.app'}

route.navigate('/buttons'); // show
route.navigate('/trash'); // не будет никакого лога
route.leave(); // hide