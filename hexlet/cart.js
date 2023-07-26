class Cart {
  items = [];

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.getItems().reduce((acc, element) => {
      return acc + element.count;
    }, 0);
  }

  getCost() {
    return this.getItems().reduce((acc, element) => {
      const total = element.item.price * element.count;
      return acc + total;
    }, 0);
  }
}

const cart = new Cart();
cart.addItem({ name: "car", price: 3 }, 5);
cart.addItem({ name: "house", price: 10 }, 2);

// console.log(cart.getItems());
console.log(cart.getCost());
