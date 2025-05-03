"use strict";
function callFunc(func) {
    setTimeout(func, 1000);
}
//function 1
function after1Sec(func) {
    setTimeout(func, 1000);
}
//funciton 2
function func() {
    console.log("hello world");
}
//function 3
after1Sec(func);
callFunc(func);
//arrays in ts
function MaxNumber(arr) {
    let MaxNumber = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (MaxNumber < arr[i]) {
            MaxNumber = arr[i];
        }
    }
    return MaxNumber;
}
let result = MaxNumber([3, 4, 6, 4, 10]);
console.log(result);
