let container = document.createElement("div");
container.className = "container";

let calculator = document.createElement("div");
calculator.className = "calculator";

let display = document.createElement("input");
display.className = "display";
display.readOnly = true;
display.disabled = true;
display.value = "0";

let buttons = document.createElement("div");
buttons.className = "buttons";

let btn7 = document.createElement("button");
btn7.type = "button";
btn7.textContent = 7;

let btn8 = document.createElement("button");
btn8.type = "button";
btn8.textContent = 8;

let btn9 = document.createElement("button");
btn9.type = "button";
btn9.textContent = 9;

let btnDiv = document.createElement("button");
btnDiv.type = "button";
btnDiv.textContent = "/";

let btn4 = document.createElement("button");
btn4.type = "button";
btn4.textContent = 4;

let btn5 = document.createElement("button");
btn5.type = "button";
btn5.textContent = 5;

let btn6 = document.createElement("button");
btn6.type = "button";
btn6.textContent = 6;

let btnMult = document.createElement("button");
btnMult.type = "button";
btnMult.textContent = "*";

let btn1 = document.createElement("button");
btn1.type = "button";
btn1.textContent = 1;

let btn2 = document.createElement("button");
btn2.type = "button";
btn2.textContent = 2;

let btn3 = document.createElement("button");
btn3.type = "button";
btn3.textContent = 3;

let btnSub = document.createElement("button");
btnSub.type = "button";
btnSub.textContent = "-";

let btn0 = document.createElement("button");
btn0.type = "button";
btn0.textContent = 0;

let btnDeci = document.createElement("button");
btnDeci.type = "button";
btnDeci.textContent = ".";

let btnPlus = document.createElement("button");
btnPlus.type = "button";
btnPlus.textContent = "+";

let btnEqual = document.createElement("button");
btnEqual.type = "button";
btnEqual.textContent = "=";


let c = document.createElement("button");
c.type = "button";
c.textContent = "C";
c.className = "c-btn";

let backSpace = document.createElement("button");
backSpace.type = "button"
backSpace.innerHTML = "Del"


let mod = document.createElement("button");
mod.type = "button"
mod.innerHTML = "%"


let controlBtns = document.createElement("div");
controlBtns.className = "control-buttons";

controlBtns.append(c, backSpace, mod);
buttons.append(
  btn7,
  btn8,
  btn9,
  btnDiv,
  btn4,
  btn5,
  btn6,
  btnMult,
  btn1,
  btn2,
  btn3,
  btnSub,
  btn0,
  btnDeci,
  btnPlus,
  btnEqual
);

calculator.append(display, controlBtns, buttons);

container.append(calculator);

document.body.append(container);

let operators = ["+", "-", "*", "/", "%"];
let allowedValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]



function calculate() {
  try {
    let executable = "";
    let value = "";

    for (let item of display.value) {
      if (!operators.includes(item)) {
        value += item;
      } else if (operators.includes(item)) {
        value = parseFloat(value);
        executable += value;
        executable += item;
        value = "";
      }
    }

    executable += parseFloat(value);

    let result = eval(executable);
    display.value = String(result);
  } catch (error) {
    display.value = "Error";

    console.log(error);
  }
}




display = document.querySelector(".display");

document.addEventListener("keydown", (event) => {
  event.preventDefault();

  

  let lastDigit = display.value[display.value.length - 1];
console.log(event.key)

  if (allowedValues.includes(event.key) || operators.includes(event.key) || event.key == "Enter" || event.key == "c" || event.key == "Backspace" ) {

  if (event.key == "c" || event.key == "C") {
    display.value = "0";

  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
    if (display.value == "" || display.value == undefined) {
        display.value = "0"
    }
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "." && !display.value.includes(".")) {
    display.value += event.key;
  } else if (event.key === "." && lastDigit != ".") {
    display.value += event.key;
  } else if (lastDigit != "." && parseFloat(display.value)) {
    display.value += event.key;
  } else {
    if (display.value.length === 1 && display.value == "0" && !operators.includes(event.key)){
        display.value = "";
        display.value = event.key;
    }
    else{
    display.value += event.key;}
  }
  }

  else {
    console.log(event.key)
    alert("Invalid key")
  }

});
