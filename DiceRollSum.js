function RollTwoDice() {
    return Math.floor(Math.random() * 10 % 6 + 1);
}

let dice1 = RollTwoDice();
let dice2 = RollTwoDice();
let addition = dice1 + dice2;
console.log("Dice 1 outcome is ", dice1);
console.log("Dice 2 outcome is ", dice2);
console.log("Sum of 2 dice roll outcome is ", addition);