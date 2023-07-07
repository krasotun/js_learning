const tree = {
  name: "/",
  owner: "kikisyan",
  children: [
    {
      name: "etc",
      owner: "kikisyan",
      children: [
        {
          name: "bashrc",
          owner: "kikisyan",
          children: [],
        },
        {
          name: "consul.cfg",
          owner: "kikisyan",
          children: [],
        },
      ],
    },
    {
      name: "hexletrc",
      owner: "kikisyan",
      children: [],
    },
    {
      name: "bin",
      owner: "kikisyan",
      children: [
        {
          name: "marata",
          owner: "kikisyan",
          children: [
            {
              name: "marat-in",
              owner: "kikisyan",
              children: [],
            },
          ],
        },
        {
          name: "ls",
          owner: "kikisyan",
          children: [],
        },
        {
          name: "cat",
          owner: "kikisyan",
          children: [],
        },
      ],
    },
  ],
};

const dfs = (node) => {
  console.log(node);

  if (!node.children.length) {
    return;
  }

  node.children.forEach(dfs);
};

// dfs(tree);

const changeOwner = (node, newOwner) => {
  node.owner = newOwner;

  if (!node.children.length) {
    return;
  }

  node.children.forEach((child) => changeOwner(child, newOwner));
  console.log(node);
};

changeOwner(tree, "marat");
