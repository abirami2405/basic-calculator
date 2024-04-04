let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function appendOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = "";
}

function calculate() {
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = currentNumber;
}
