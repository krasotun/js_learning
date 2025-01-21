// при добавлении и удалении элементов из массива обновляйте this.length;
// после удаления элемента и сдвига очищайте содержимое последней ячейки памяти;
// после добавления элемента проверьте условие this.length === this.size. Увеличьте память, если нужно;
// увеличивая память, обновите this.size;
// сделайте проверку индекса отдельной процедурой. Помните, индекс должен быть меньше this.length и больше либо равен нулю.

class MyArray {
  constructor(initialSize = 1) {
    if (
      Number(initialSize) !== initialSize ||
      Math.round(initialSize) !== initialSize
    ) {
      throw new Error("Длина массива должна быть целым числом");
    }
    if (!(initialSize > 0)) {
      throw new Error("Размер массива должен быть больше нуля");
    }
    this.size = initialSize;
    this.memory = allocate(initialSize);
    this.length = 0;
  }
  _checkIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Индекс за пределами массива");
    }
  }
  _resize() {
    const newSize = this.size * 2;
    const newMemory = allocate(newSize);
    for (const key in this.memory) {
      newMemory[key] = this.memory[key];
    }
    this.memory = newMemory;
    this.size = newSize;
  }

  get(index) {
    this._checkIndex(index);
    return this.memory[index];
  }

  set(index, value) {
    this._checkIndex(index);
    this.memory[index] = value;
  }

  delete(index) {
    this._checkIndex();
    for (let i = index + 1; i < this.size; i++) {
      this.memory[i - 1] = this.memory[i];
    }
    this.length--;
    this.memory[this.length] = undefined;
    return this.length;
  }

  add(value, index) {
    if (index === undefined) {
      this.memory[this.length] = value;
    } else {
      this._checkIndex();
      for (let i = this.length - 1; i >= index; i--) {
        this.memory[i + 1] = this.memory[i];
      }
      this.memory[index] = value;
    }
    this.length++;
    if (this.length === this.size) {
      this._resize();
    }
    return this.length;
  }
}

function allocate(size) {
  const memory = {};

  for (let i = 0; i < size; i++) {
    memory[i] = undefined;
  }

  return memory;
}

const front = (arr) => {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
};

const reverse = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i >= 0; i--) {
    console.log(newArr[i]);
  }
};

const insertToArray = (arr, value, index) => {
  if (index >= arr.length) {
    throw new Error("Индекс за пределами массива");
  }
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
};

const deleteFromArray = (arr, index) => {
  if (index >= arr.length) {
    throw new Error("Индекс за пределами массива");
  }
  for (let i = index + 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length--;
  return arr;
};
