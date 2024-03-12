function createButton(type, className, textContent, value) {
  let btn = document.createElement("button");
  btn.type = type;
  btn.className = className;
  btn.textContent = textContent;
  btn.value = value;
  return btn;
}

function addButtonClickListener(button, callback) {
  button.addEventListener("click", (event) => {
      event.preventDefault();
      callback(event);
  });
}

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

function handleOperatorButtonClick(operator) {
  display.value += operator;
}

function handleCalculate() {
  try {
      let executable = display.value.replace(/%/g, "/100");
      let result = eval(executable);
      display.value = String(result);
  } catch (error) {
      display.value = "Error";
      console.log(error);
  }
}

function handleClearButtonClick() {
  display.value = "0";
}

function handleBackspaceButtonClick() {
  display.value = display.value.slice(0, -1) || "0";
}

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
let container = document.createElement("div");
container.className = "container";

let calculator = document.createElement("div");
calculator.className = "calculator";

let title = document.createElement("h5");
title.textContent = "14 digits";


let display = document.createElement("input");
display.className = "display";
display.readOnly = true;
display.value = "0";

let buttons = document.createElement("div");
buttons.className = "buttons";

let controlBtns = document.createElement("div");
controlBtns.className = "control-buttons";

let operators = ["+", "-", "*", "/", "%"];
let allowedValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let numberButtons = Array.from({ length: 10 }, (_, i) => i).reverse().map((num) => {
  let btn = createButton("button", `btn${num}`, num, num);
  addButtonClickListener(btn, () => handleNumberButtonClick(num));
  return btn;
});

let operatorButtons = operators.map((operator) => {
  let btn = createButton("button", "operator-btn", operator, operator);
  addButtonClickListener(btn, () => handleOperatorButtonClick(operator));
  return btn;
});

let decimalButton = createButton("button", "decimal-btn", ".", ".");
addButtonClickListener(decimalButton, () => handleOperatorButtonClick("."));

let equalsButton = createButton("button", "equals-btn", "=", "=");
addButtonClickListener(equalsButton, handleCalculate);

let clearButton = createButton("button", "c-btn", "C", "C");
addButtonClickListener(clearButton, handleClearButtonClick);

let backspaceButton = createButton("button", "del-btn", "Del", "Backspace");
addButtonClickListener(backspaceButton, handleBackspaceButtonClick);

let percentButton = createButton("button", "percent-btn", "%", "%");
addButtonClickListener(percentButton, () => handleOperatorButtonClick("/100"));

numberButtons.forEach((btn) => buttons.appendChild(btn));
operatorButtons.forEach((btn) => buttons.appendChild(btn));
buttons.append(decimalButton, equalsButton);

controlBtns.append(clearButton, backspaceButton);

calculator.append(title,display, controlBtns, buttons);
container.append(calculator);
document.body.append(container);

document.addEventListener("keydown", handleKeyboardInput);
