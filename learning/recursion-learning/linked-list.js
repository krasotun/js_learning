const mockList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const reqPrintList = (list) => {
  if (!list) {
    return;
  }

  console.log(list.value);

  return reqPrintList(list.next);
};

console.log(reqPrintList(mockList));

// const printList = (list) => {
//   let node = list;
//   const result = [];
//   while (node) {
//     result.push(node.value);
//     node = node.next;
//   }
//   return result;
// };

// console.log(printList(mockList));
