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

function getParents(node, parentArray = []) {
  if (node.children.length > 0) {
    node.children.forEach((child) => getParents(child, [...parentArray, node.a]));
  } else {
    console.log(`${node.a} has parents: ${parentArray}`);
  }
}

getParents(tree);
