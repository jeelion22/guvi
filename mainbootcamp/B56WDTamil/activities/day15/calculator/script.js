

// create a function that creates buttons
function createButton(type, className, textContent, value) {
  let btn = document.createElement("button");
  btn.type = type;
  btn.className = className;
  btn.textContent = textContent;
  btn.value = value;
  return btn;
}

// create function for event listener when event click happens
function addButtonClickListener(button, callback) {
  button.addEventListener("click", (event) => {
      event.preventDefault();
      callback(event);
  });
}

// this function handles clicks on numbers buttons
function handleNumberButtonClick(value) {
  if (display.value.length < 14) {
      if (display.value.length === 1 && display.value === "0") {
          display.value = "";
      }
      display.value += value;
  } else {
      alert("Maximum number of digits reached (14)");
  }
}

// It is the function handles operator buttons when clicking them
function handleOperatorButtonClick(operator) {
  display.value += operator;
}

// executes final string
function handleCalculate() {
  try {
      let executable = display.value.replace(/%/g, "%");
      let result = eval(executable);
      display.value = String(result);
  } catch (error) {
      display.value = "Error";
      console.log(error);
  }
}

// handles when button c or C either clicked or key downed
function handleClearButtonClick() {
  display.value = "0";
}

// when Del button clicked or Backspace is key pressed, this function will be called
function handleBackspaceButtonClick() {
  display.value = display.value.slice(0, -1) || "0";
}

// All of the keys down is handled by this function

function handleKeyboardInput(event) {
  let key = event.key;
  let lastDigit = display.value.slice(-1);

  if (allowedValues.includes(key) || operators.includes(key) || key === "Enter" || key === "c" || key === "Backspace") {
      if (display.value.length < 14 || key !== "Backspace") {
          switch (key) {
              
                
              case "c":
              case "C":
                  handleClearButtonClick();
                  break;
              case "Backspace":
                  handleBackspaceButtonClick();
                  break;
              case "Enter":
                  handleCalculate();
                  break;
              case ".":
                  if (!display.value.includes(".")) {
                      display.value += key;
                  }
                  break;
              default:
                  if (!isNaN(parseFloat(key)) || (lastDigit !== "." && parseFloat(display.value))) {
                      handleNumberButtonClick(key);
                  } else {
                      handleOperatorButtonClick(key);
                  }
          }
      } else {
          alert("Maximum number of digits reached (14)");
      }
  } else {
      console.log(key);
      alert("Invalid key");
  }
}
// creates a container for the calculator
let container = document.createElement("div");
container.className = "container";

// calculator block
let calculator = document.createElement("div");
calculator.className = "calculator";

// specifies the calculator's operable digits
let title = document.createElement("h5");
title.textContent = "14 digits";

// it is for display of the calculator
let display = document.createElement("input");
display.className = "display";
display.readOnly = true;
display.value = "0";

// creat a generic buttons block
let buttons = document.createElement("div");
buttons.className = "buttons";

// create a control buttons block
let controlBtns = document.createElement("div");
controlBtns.className = "control-buttons";

// make an array of operators used, it is useful for  preventing other keys to be pressed
let operators = ["+", "-", "*", "/", "%"];

// another array with numarals and decimal values
let allowedValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

// here we start creating our buttons ; using Array.from() method by generating array from array like object
// then that created array is reversed and then mapped to createButton function;
// after creating a button then it is passed to another function called addButtonClickListener as an argument
// after adding specific functionalities to the button, it is returned
// finally the numberButtons is an array of number buttons
let numberButtons = Array.from({ length: 10 }, (_, i) => i).reverse().map((num) => {
  let btn = createButton("button", `btn${num}`, num, num);
  addButtonClickListener(btn, () => handleNumberButtonClick(num));
  return btn;
});

// this function creates operator buttons
let operatorButtons = operators.map((operator) => {
  let btn = createButton("button", "operator-btn", operator, operator);
  addButtonClickListener(btn, () => handleOperatorButtonClick(operator));
  return btn;
});

// creates a decimal button then adds operation on it
let decimalButton = createButton("button", "decimal-btn", ".", ".");
addButtonClickListener(decimalButton, () => handleOperatorButtonClick("."));

// creates equals button and addes functionalities
let equalsButton = createButton("button", "equals-btn", "=", "=");
addButtonClickListener(equalsButton, handleCalculate);

// creates clear button
let clearButton = createButton("button", "c-btn", "C", "C");
addButtonClickListener(clearButton, handleClearButtonClick);

// creates backspace or Del button and addes functions
let backspaceButton = createButton("button", "del-btn", "Del.", "Backspace");
addButtonClickListener(backspaceButton, handleBackspaceButtonClick);

// creates modulus button and adds operation
let modulusButton = createButton("button", "modulus-btn", "%", "%");
addButtonClickListener(modulusButton, () => handleOperatorButtonClick("%"));

// appends all buttons
numberButtons.forEach((btn) => buttons.appendChild(btn));
operatorButtons.forEach((btn) => buttons.appendChild(btn));
buttons.append(decimalButton, equalsButton);

controlBtns.append(clearButton, backspaceButton);

calculator.append(title,display, controlBtns, buttons);
container.append(calculator);
document.body.append(container);

document.addEventListener("keydown", handleKeyboardInput);
