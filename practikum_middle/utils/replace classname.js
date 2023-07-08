import _ from "lodash";
const changeClass = (tree, oldClass, newClass) => {
  const iter = (node) => {
    const updatedNode = { ...node };

    if (updatedNode.className === oldClass) {
      updatedNode.className = newClass;
    }

    if (updatedNode.children) {
      const newChildren = updatedNode.children.map((node) => iter(node));
      updatedNode.children = newChildren;
    }
    return updatedNode;
  };
  return iter(tree);
};

const tree = {
  name: "div",
  type: "tag-internal",
  className: "hexlet-community",
  children: [
    {
      name: "div",
      type: "tag-internal",
      className: "old-class",
      children: [
        {
          name: "h6",
          type: "tag-internal",
          className: "old-class",
          children: [],
        },
      ],
    },
    {
      name: "div",
      type: "tag-internal",
      className: "old-class",
      children: [],
    },
  ],
};

console.log(changeClass(tree, "old-class", "new-class"));
