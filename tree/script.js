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

const walkThrough = function(node, path) {

    const length = node.children.length;
    console.log("LENGTH: " + length);

    for (let i = 0; i < length; i++) {
        walkThrough(node.children[i]);
        console.log("Current node: " + node.children[i].a + " i= " + i);
 //       console.log("Current child: " + node.a);
        }
}

walkThrough(tree);

// Вывести в консоль цепочки родителей для каждого самого глубокого чилдрена