const crypto = require("crypto");

console.log("Dice Rolling Started");

for (let i = 1; i <= 5; i++) {
    let dice = crypto.randomInt(1, 7);
    console.log("Dice Rolled:", dice);
}

console.log("Dice Rolling Finished");