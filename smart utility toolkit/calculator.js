let operation = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);

console.log("Operation:", operation);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers");
} else if (operation === "add") {
    console.log("Result:", num1 + num2);
} else if (operation === "subtract") {
    console.log("Result:", num1 - num2);
} else if (operation === "multiply") {
    console.log("Result:", num1 * num2);
} else if (operation === "divide") {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log("Result:", num1 / num2);
    }
} else {
    console.log("Invalid operation");
}