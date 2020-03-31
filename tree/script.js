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

let parents = [];

const walkThrough = function(node) {

    const length = node.children.length;
    console.log(`LENGTH: ${length}`);

    if (length > 0) {
  //      parents.push(node.a);
        for (let i = 0; i < length; i++) {
            parents.push(node.a);
            walkThrough(node.children[i]);
            }
        }
    else {
    console.log(`${node.a} has parents: ${parents}`);
    parents = [];
    }

}

walkThrough(tree);

// Вывести в консоль цепочки родителей для каждого самого глубокого чилдрена

