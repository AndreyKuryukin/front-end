const tree = {
  a: 1,
  children: [
    {
      a: 2,
      children: [
        {
          a: 4,
          children: []
        },
        {
          a: 5,
          children: []
        }
      ]
    },
    {
      a: 3,
      children: [
        {
          a: 6,
          children: []
        },
        {
          a: 7,
          children: [
            {
              a: 8,
              children: [
                {
                  a: 9,
                  children: []
                },
                {
                  a: 10,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

let currentParents = [];

function getParents(node) {
  if (node.children.length > 0) {
    currentParents.push(node.a);
    node.children.forEach((child) => getParents(child));
  } else {
    console.log(`${node.a} has parents: ${currentParents}`);
  }
}

getParents(tree);
