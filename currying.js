// currying means in simple terms that making more 
// function with one function with some modifications

// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 4);
// multiplyByTwo(4);

// using closure

let multi = function (x) {
    console.log(x);
    return function (y) {
        console.log(y);
        console.log(x * y);
    }
}
let multiplication = multi(2);
multiplication(4);

// Why do we use currying ?
// to avoid passing the same variable again and again
//  to create HOF
// to make function pure and less prone to errors
//

function s(a) {
    return function u(b) {
        return function m(c) {
            return a + b + c;
        }
    }
}
console.log(s(2)(6)(1));

// Q -> evalute("sum")(4)(2) => 6
//       evalute("multiply")(4)(2) => 8
//       evalute("divide")(4)(2) => 2
//       evalute("substract")(4)(2) => 2

function evalute(operation) {
    return function (a) {
        return function (b) {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "substract") return a - b;
            else return "Invalid Operation";
        }
    }
}

console.log(evalute("sum")(4)(5));
