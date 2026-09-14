const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Checking numbers");

let num1 = 10;
let num2 = 7;
let num3 = 24;

if (isEven(num1)) {
    console.log(num1, "is even");
} else {
    console.log(num1, "is odd");
}

if (isEven(num2)) {
    console.log(num2, "is even");
} else {
    console.log(num2, "is odd");
}

if (isEven(num3)) {
    console.log(num3, "is even");
} else {
    console.log(num3, "is odd");
}

logger("Program finished");