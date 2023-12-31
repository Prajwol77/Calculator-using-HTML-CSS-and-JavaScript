const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

let previousAnswer = 0;

function calculate() {
  try {
    previousAnswer = display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function ans() {
  display.value = previousAnswer;
}
