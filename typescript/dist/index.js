"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = calculator;
function calculator(num1, num2, operation) {
    if (operation == "sum") {
        return num1 + num2;
    }
    else if (operation == "sub") {
        return num1 - num2;
    }
    else if (operation == "div") {
        return num1 / num2;
    }
    else if (operation == "mul") {
        return num1 * num2;
    }
    else if (operation == "pow") {
        return num1 ** num2;
    }
    return -1;
}
function greet(person) {
    return person;
}
console.log(greet({
    name: "vivek",
    age: 19,
    gender: "male",
    orientation: "striaght",
    pronouns: "he/him",
}));
function greetType(person) {
    return person.name + " is his name and " + person.age + " his age";
}
console.log(greetType({ name: "vivek", age: 19 }));
function renderShape(shape) {
    console.log("Rendered !");
}
var Arithematics;
(function (Arithematics) {
    Arithematics[Arithematics["Add"] = 0] = "Add";
    Arithematics[Arithematics["Sub"] = 1] = "Sub";
    Arithematics[Arithematics["Mul"] = 2] = "Mul";
    Arithematics[Arithematics["Div"] = 3] = "Div";
})(Arithematics || (Arithematics = {}));
function calculate(a, b, type) {
    console.log(type);
    return "Ans";
}
let x = calculate(1, 2, Arithematics.Div);
console.log(x);
function firstElem(arr) {
    return arr[0];
}
const value = firstElem(["vivek", "rawat"]);
function identity(arg) {
    return arg[0];
}
let output1 = identity(["MyString", "vivek", "singh"]);
let output2 = identity([1, 4, 6, 7, 2]);
console.log(output1.toUpperCase(), output2);
