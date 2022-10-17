// Содержать жизненный цикл на основе Event Bus с методами:
// init — создание обёртки DOM - элемента и вызов CDM.Название события: init,
// componentDidMount — эмитится через метод dispatchComponentDidMount снаружи блока.
// Название события: flow: component - did - mount,
// componentDidUpdate — эмитится через Event Bus после изменения пропсов блока.
// Если пропсы не поменялись, перерендер не нужен, если явно не переопределён в классе блока такой метод.
// Метод должен вернуть значение boolean.Если true — компоненту нужно перерендерить, если false — не нужно.
// Название события: flow: component - did - update,
// render — получение уже готовой разметки со всеми значениями.
// Всегда делается рендер строки.Название события: flow: render.
// В первый раз должен быть вызван после init, затем после обновлений.
// Предоставлять методы, показывающие и скрывающие блок:
// show — делает значение display равным block,
// hide — делает значение display равным none.
// Создавать «обёртку» с указанным тегом в конструкторе.
// Перерисовываться при изменении пропсов через Proxy.
// Выкидывать ошибку «нет доступа» при попытке удалить свойства в props блока.
class Block {
	static EVENTS = {
		INIT: "init",
		FLOW_CDM: "flow:component-did-mount",
		FLOW_CDU: "flow:component-did-update",
		FLOW_RENDER: "flow:render",
	};

	_element = null;
	_meta = null;

	/** JSDoc
		 * @param {string} tagName
		 * @param {Object} props
		 *
		 * @returns {void}
		 */
	constructor(tagName = "div", props = {}) {
		const eventBus = new EventBus();
		this._meta = {
			tagName,
			props
		};

		this.props = this._makePropsProxy(props);

		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT);
	}

	_registerEvents(eventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_createResources() {
		const { tagName } = this._meta;
		this._element = this._createDocumentElement(tagName);
	}

	init() {
		this._createResources();
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	_componentDidMount() {
		this.componentDidMount();
	}

	// Может переопределять пользователь, необязательно трогать
	componentDidMount(oldProps) { }

	dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	_componentDidUpdate(oldProps, newProps) {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}
		this._render();
	}

	// Может переопределять пользователь, необязательно трогать
	componentDidUpdate(oldProps, newProps) {
		return true;
	}

	setProps = nextProps => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element() {
		return this._element;
	}

	_render() {
		const block = this.render();
		// Этот небезопасный метод для упрощения логики
		// Используйте шаблонизатор из npm или напишите свой безопасный
		// Нужно не в строку компилировать (или делать это правильно),
		// либо сразу в DOM-элементы возвращать из compile DOM-ноду
		this._element.innerHTML = block;
	}

	// Может переопределять пользователь, необязательно трогать
	render() { }

	getContent() {
		return this.element;
	}

	_makePropsProxy(props) {
		// Можно и так передать this
		// Такой способ больше не применяется с приходом ES6+
		const self = this;
		return new Proxy(
			props, {
			get(target, prop) {
				const value = target[prop];
				return typeof value === "function" ? value.bind(target) : value;
			},
			set(target, prop, value) {
				target[prop] = value;
				self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			}
		});
	}

	_createDocumentElement(tagName) {
		// Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
		return document.createElement(tagName);
	}

	show() {
		this.getContent().style.display = "block";
	}

	hide() {
		this.getContent().style.display = "none";
	}
}