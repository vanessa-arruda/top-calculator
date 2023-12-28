const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let number1;
let number2;
let operator;

function operate (number1, number2, operator) {

    if (operator === "+"){
        let result = number1 + number2;
    }else if (operator === "-") {
        let result = number1 - number2;
    }else if (operator === "*") {
        let result = number1 * number2;
    }else if (operator === "/") {
        let result = number1 / number2;
    };
}