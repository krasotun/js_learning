import { URL } from "url";

class CustomUrl {
  constructor(string) {
    this.url = new URL(string);
  }

  getScheme() {
    return this.url.protocol.slice(0, -1);
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return Object.fromEntries(this.url.searchParams.entries());
  }

  getQueryParam(param, newParam = null) {
    const queryParams = this.getQueryParams();

    if (!Object.hasOwn(queryParams, param)) {
      queryParams[param] = newParam;
    }

    return queryParams[param];
  }

  equals(diffUrl) {
    return this.url.href === diffUrl.url.href;
  }
}

const customUrl = new CustomUrl("http://yandex.ru:80?key=value&key2=value2");
console.log(customUrl.getScheme());
console.log(customUrl.getHostName());
console.log(customUrl.getQueryParams());
console.log(customUrl.getQueryParam("key"));
console.log(customUrl.getQueryParam("key2", "lala"));
console.log(customUrl.getQueryParam("new", "ehu"));
console.log(customUrl.getQueryParam("new"));
console.log(
  customUrl.equals(new CustomUrl("http://yandex.ru:80?key=value&key2=value2"))
);
console.log(customUrl.equals(new CustomUrl("http://yandex.ru:80?key=value")));
