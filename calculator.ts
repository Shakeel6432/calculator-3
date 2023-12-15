import { log } from "console";

const calculator = ()=>{
let prompt = require("prompt-sync")();
let num1 = Number.parseInt(prompt('Enter the first value '))
let num2 = Number.parseInt(prompt('Enter the second value '))
let operator = prompt('Please enter your operator (+, *, -, /) ')
if (operator == "+") {
    console.log(`The answer of ${num1} ${operator} ${num2} = ${num1 + num2}`);
}
else if (operator == "*") {
    console.log(`The answer of ${num1} ${operator} ${num2} = ${num1 * num2}`);
}
else if (operator == "-") {
    console.log(`The answer of ${num1} ${operator} ${num2} = ${num1 - num2}`);
}
else if (operator == "/") {
    console.log(`The answer of ${num1} ${operator} ${num2} = ${num1 / num2}`);
}
else {
    console.log("Enter your wrong operator");
}
}
calculator()