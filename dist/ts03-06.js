"use strict";
//7.Rest Parameter
function sum(a, ...x) {
    let result = a;
    console.log(x.length);
    for (let i = 0; i < x.length; i++) {
        result += x[i];
    }
    return result;
}
console.log(sum(3, 5, 7, 9, 10, 20, 30));
