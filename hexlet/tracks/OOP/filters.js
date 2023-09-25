// BEGIN (write your solution here)
// Решение позволяет легко расширить приложение новыми фильтрами и типами проверок
const getPredicate = (predicate) => {
  switch (predicate) {
    case "eq":
      return (value) => (el) => String(el) === String(value);
    case "gte":
      return (value) => (el) => el >= Number(value);
    case "lte":
      return (value) => (el) => el <= Number(value);
    default:
      throw new Error(`unknown predicate: ${predicate}`);
  }
};

const inputsConfig = {
  processor_eq: "change",
  memory_eq: "change",
  frequency_lte: "input",
  frequency_gte: "input",
};

const filterItems = (items, query) => {
  // Остаются только изменённые пользователем фильтры
  const activeFilters = Object.entries(query).filter(
    ([, filterValue]) => filterValue !== null
  );
  // Фильтрация товаров: каждый товар должен удовлетворять каждому фильтру из списка
  return items.filter((item) =>
    activeFilters.every(([filterName, filterValue]) => {
      const [propertyName, predicate] = filterName.split("_");
      const match = getPredicate(predicate);
      const itemProperty = item[propertyName];
      return match(filterValue)(itemProperty);
    })
  );
};

const render = (state) => {
  const resultElement = document.querySelector(".result");
  const filtered = filterItems(state.laptops, state.filter);

  if (filtered.length === 0) {
    resultElement.innerHTML = "";
    return;
  }
  // элементы для вставки можно как создать через интерфейс document.createElement,
  // так и собрать строку
  const html = `<ul>${filtered
    .map((item) => `<li>${item.model}</li>`)
    .join("")}</ul>`;
  resultElement.innerHTML = html;
};

export default (laptops) => {
  // state на уровне приложения
  const state = {
    laptops,
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_lte: null,
      frequency_gte: null,
    },
  };
  // На каждое поле ввода вешается обработчик, изменяющий стейт и вызывающий отрисовку
  Object.entries(inputsConfig).forEach(([inputName, eventName]) => {
    const input = document.querySelector(`[name="${inputName}"]`);
    input.addEventListener(eventName, ({ target }) => {
      state.filter[inputName] = target.value === "" ? null : target.value;
      render(state);
    });
  });
  render(state);
};
// END
