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
console.log(calculator(23, 44, "sum"));
