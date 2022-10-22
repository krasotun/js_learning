import { v4 } from "uuid";
import { Component, ComponentProps } from "../shared/interfaces";
import EventEmitter from "./EventEmitter";
import EventBus from "./EventBus";

type Proplist = {
  name: string;
  selector: string;
  attribute: string;
  isValue?: boolean;
}[];

enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}

export default abstract class Block implements Component {
  protected props: ComponentProps;

  protected eventBus: () => EventBus;

  protected eventEmitter: EventEmitter;

  protected node: HTMLElement;

  protected _proplist: Proplist = [];

  protected get proplist(): Proplist {
    return this._proplist;
  }

  get className(): string {
    return this.props.className || "";
  }

  constructor(props: ComponentProps) {
    const eventBus = new EventBus();
    this.eventEmitter = new EventEmitter();

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  protected init() {
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  bindProps() {
    this.proplist.forEach(({ name, selector, attribute, isValue }) => {
      const prop = this.props[name];
      if (prop) {
        const element = this.node.querySelector(selector);
        if (element) {
          if (isValue) {
            // @ts-ignore
            element[attribute] = prop;
          } else {
            element.setAttribute(attribute, prop);
          }
        }
      }
    });
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  get content(): HTMLElement {
    return this.node;
  }

  componentDidMount() {}

  abstract render(): string;

  _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response) {
      return;
    }
    if (response) {
      this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate() {
    return true;
  }

  setProps = (nextProps: ComponentProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(EVENTS.FLOW_CDU);
  };

  private _render(): void {
    let renderedElement = null;
    if (this.node) {
      const nodeId = this.node.getAttribute("id");

      if (nodeId) {
        renderedElement = document.getElementById(nodeId);
      }
    }

    const html = this.render();
    const divElement = document.createElement("div");
    divElement.innerHTML = html.trim();
    divElement.querySelectorAll("[data-props]").forEach((el) => {
      const name = el.getAttribute("data-props");
      if (this.props.children && name) {
        // @ts-ignore
        el.replaceWith(this.props.children[name]);
      }
    });
    this.node = <HTMLElement>divElement.firstChild;
    const id = v4();
    this.node.setAttribute("id", id);

    this.eventEmitter.clear();
    this.eventEmitter.node = this.node;
    this.bindProps();
    this.customiseComponent();

    if (this.className) {
      this.node.setAttribute("class", this.className);
    }

    if (renderedElement) {
      renderedElement.replaceWith(this.node);
    }

    if (this.props?.events) {
      Object.entries(this.props.events).forEach(
        ([eventName, callback]: [string, () => void]) => {
          this.eventEmitter.add(eventName, callback);
        }
      );
    }
  }

  protected customiseComponent() {}

  _makePropsProxy(props: ComponentProps) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      set(target, prop, value) {
        // @ts-ignore
        target[prop] = value;
        self.eventBus().emit(EVENTS.FLOW_CDU);
        return true;
      },
      deleteProperty() {
        throw new Error("Отказано в доступе");
      },
    });
  }
}
