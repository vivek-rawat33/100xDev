"use strict";
function callFunc(func) {
    setTimeout(func, 1000);
}
function after1Sec(func) {
    setTimeout(func, 1000);
}
function func() {
    console.log("hello world");
}
after1Sec(func);
callFunc(func);
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
