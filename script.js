var _name;
let second_name;

const onClick = function () {
    console.log(Array.from(arguments))
}

//Function declaration
function func() {

}

//Function expression
const _func = function() {

}

// Arrow function
const arrowFuc = () => {};

const obj = {
    key: 'value',
    key2: 4,
    key3: {a: 1},
    key: function () {

    }
};

if (-1) {
    console.log('TRUE' + 5);
} else if ([]) {
    console.log('ELSE IF');
} else {
    console.log('FINAL ELSE');
}

for (let i = 0; i < 10; ++i) {
    console.log(i)
}

[1,2,3].forEach(() => {});

document.getElementById('child').className = "child_2"