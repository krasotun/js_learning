class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const stringify = (list) => {
  if (!list) {
    return "null";
  }

  let result = [];

  const pushData = (node) => {
    result.push(node.data);

    if (!node.next) {
      return;
    }

    return pushData(node.next);
  };

  pushData(list);
  result.push("null");
  return result.join(" -> ");
};

const node = new Node(1, new Node(2, new Node(3)));

console.log(stringify(node));
