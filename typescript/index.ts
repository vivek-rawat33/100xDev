export function calculator(
  num1: number,
  num2: number,
  operation: "sum" | "sub" | "div" | "mul" | "pow"
): number {
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

//defining interface

interface PersonGenderProperties {
  gender: string;
  orientation: string;
  pronouns: string;
}

interface PersonInterface extends PersonGenderProperties {
  name: string;
  age: number;
}

interface AnimalInterface extends PersonGenderProperties {
  name: string;
  furType: string;
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

function greet(person: PersonInterface) {
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

//defining types

type PersonType = {
  name: string;
  age: number;
};
function greetType(person: PersonType) {
  return person.name + " is his name and " + person.age + " his age";
}

console.log(greetType({ name: "vivek", age: 19 }));

//interface (interface can implemented by class interface can extend each other types cant do that )
interface Circle {
  radius: number;
  borderWidth?: number; //optional parameters
}
interface Square {
  side: number;
}
interface Rectangle {
  length: number;
  breadth: number;
}
interface Triangle {
  side1: number;
  side2: number;
  side3: number;
}

//using type for function argument (types let you do intersections and unions interface dont let you do that)
type Shape = Rectangle | Square | Circle | Triangle;

function renderShape(shape: Shape) {
  console.log("Rendered !");
}

//enums (just give a suggestions)

enum Arithematics {
  Add, //0
  Sub, //1
  Mul, //2
  Div, //3
}

function calculate(a: number, b: number, type: Arithematics) {
  console.log(type); // 3
  return "Ans";
}
let x = calculate(1, 2, Arithematics.Div);
console.log(x);
