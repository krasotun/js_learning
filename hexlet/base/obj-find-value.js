// которая извлекает из объекта любой глубины вложенности значение по указанным ключам. Параметры:

// Исходный объект
// Цепочка ключей (массив), по которой ведётся поиск значения
// В случае, когда добраться до значения невозможно, возвращается null.

const data = {
  user: "ubuntu",
  hosts: {
    0: {
      name: "web1",
    },
    1: {
      name: "web2",
      null: 3,
      active: false,
    },
  },
};

const findValue = (object, array) => {
  let current = object;

  for (const key of array) {
    const hasProperty = Object.hasOwn(current, key);
    if (!hasProperty) {
      return null;
    }
    current = current[key];
  }

  return current;
};

findValue(data, ["user"]); // 'ubuntu'
findValue(data, ["user", "ubuntu"]); // null
findValue(data, ["hosts", 1, "name"]); // 'web2'
findValue(data, ["hosts", 0]); // { name: 'web1' }
findValue(data, ["hosts", 1, null]); // 3
findValue(data, ["hosts", 1, "active"]); // false
