function twoDigitNumber() {
    return Math.floor(Math.random() * 100 % 90 + 10);
}

let randomNumber = [];
for (let i = 0; i < 5; i++) {
    randomNumber[i] = twoDigitNumber();
}
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum = sum + randomNumber[i];

}
console.log("Five random values are ", randomNumber);
console.log("Sum of these five values is ", sum);
console.log("Average of these five values is ", sum / 5);