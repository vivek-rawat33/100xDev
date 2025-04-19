"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = calculator;
function calculator(num1, num2, operation) {
  if (operation == "sum") {
    return num1 + num2;
  } else if (operation == "sub") {
    return num1 - num2;
  } else if (operation == "div") {
    return num1 / num2;
  } else if (operation == "mul") {
    return num1 * num2;
  } else if (operation == "pow") {
    return num1 ** num2;
  }
  return -1;
}
// class Person implements PersonInterface {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return "HI sir " + this.name;
//   }
// }
// const personObj = new Person("Vivek", 19);
// console.log(personObj.greet());
function greet(person) {
  return person;
}
console.log(
  greet({
    name: "vivek",
    age: 19,
    gender: "male",
    orientation: "striaght",
    pronouns: "he/him",
  })
);
function greetType(person) {
  return person.name + " is his name and " + person.age + " his age";
}
console.log(greetType({ name: "vivek", age: 19 }));
function renderShape(shape) {
  console.log("Rendered !");
}
//enums (just give a suggestions)
var Arithematics;
(function (Arithematics) {
  Arithematics[(Arithematics["Add"] = 0)] = "Add";
  Arithematics[(Arithematics["Sub"] = 1)] = "Sub";
  Arithematics[(Arithematics["Mul"] = 2)] = "Mul";
  Arithematics[(Arithematics["Div"] = 3)] = "Div";
})(Arithematics || (Arithematics = {}));
function calculate(a, b, type) {
  console.log(type); // 0
  return "Ans";
}
let x = calculate(1, 2, Arithematics.Div);
console.log(x);
