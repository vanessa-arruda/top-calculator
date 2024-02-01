//calculator number variables
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

//calculator operators and display variables
const clearBtn = document.getElementById("clear");
const decimal = document.getElementById("decimal");
const display = document.getElementById("display-content"); 
const division = document.getElementById("division");
const equals = document.querySelector(".result");
const multiply = document.getElementById("multiply");
const percentage = document.getElementById("percentage");
const plusMinus = document.getElementById("plus-minus");
const subtract = document.getElementById("subtract");
const sum = document.getElementById("sum");
const maxDisplayWidth = 11;

let num1 = "";
let num2 = "";
let operator;

//event listeners
// number buttons
zero.addEventListener("click", () => displayNumber("0"));
one.addEventListener("click", () => displayNumber("1"));
two.addEventListener("click", () => displayNumber("2"));
three.addEventListener("click", () => displayNumber("3"));
four.addEventListener("click", () => displayNumber("4"));
five.addEventListener("click", () => displayNumber("5"));
six.addEventListener("click", () => displayNumber("6"));
seven.addEventListener("click", () => displayNumber("7"));
eight.addEventListener("click", () => displayNumber("8"));
nine.addEventListener("click", () => displayNumber("9"));
decimal.addEventListener("click", () => displayNumber("."));
plusMinus.addEventListener("click", toggleMinusPlus);

// operators
sum.addEventListener("click", () => setOperator("+"));
subtract.addEventListener("click", () => setOperator("-"));
multiply.addEventListener("click", () => setOperator("*"));
division.addEventListener("click", () => setOperator("/"));
percentage.addEventListener("click", () => setOperator("%"));
equals.addEventListener("click", performCalc);

// clear button
clearBtn.addEventListener("click", clearOperation);


//calculator functions (operations)
//link each button with right value output

function displayNumber(value) {
    if (display.innerHTML.length < maxDisplayWidth) {
        display.innerHTML += value;
    } else {
        display.innerHTML = display.innerHTML.substring(0, maxDisplayWidth); // Truncate
    }
}

function setOperator(symbol) {
    if (num1 === "") {
        num1 = display.innerHTML;
        operator = symbol;
        display.innerHTML = "";
    }
}

function toggleMinusPlus() {
    display.innerHTML = parseFloat(display.innerHTML) * (-1);
}

function performCalc() {
    if (num1 !== "" && display.innerHTML !== "") {
        num2 = display.innerHTML;
        let result = calculate(parseFloat(num1), parseFloat(num2), operator);
        display.innerHTML = result.toFixed(1);
        num1 = "";
        num2 = "";
    }
}
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error';
            }
        case '%':
            return (num1 / 100) * num2;
        default:
            return 'Error';
    }
}
function clearOperation() {
    num1 = "";
    num2 = "";
    operator = undefined;
    display.innerHTML = "";
}

// color-theme functions
//toggle theme variables
const toggleBtn = document.getElementById("toggle-btn");
const numberClass = document.querySelectorAll(".number");
const operatorClass = document.querySelectorAll(".operator");
const firstBtns = document.querySelectorAll(".first");
const displayClass = document.querySelector(".display-container");
const equalsBtn = document.querySelector(".result");
const texts = document.querySelectorAll(".text-color");
const smLogos = document.querySelectorAll(".sm-logo");

toggleBtn.addEventListener("click", () => {
    numberClass.forEach(NumEl => {
        NumEl.classList.toggle("matrix");
    });
    operatorClass.forEach(opEl => {
        opEl.classList.toggle("op-matrix");
    });
    firstBtns.forEach(firstEl => {
        firstEl.classList.toggle("first-matrix");
    });
    texts.forEach(textEl => {
        textEl.classList.toggle("text-matrix");
    });
    displayClass.classList.toggle("matrix");
    equalsBtn.classList.toggle("eq-matrix");
    document.body.classList.toggle("body-bg-matrix");
    smLogos.forEach(svgEl => {
        svgEl.classList.toggle("sm-logo-matrix");
    });

});