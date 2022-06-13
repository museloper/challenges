const rangeNumber = document.querySelector(".range_number");
const inputNumber = document.querySelector(".input_number");
const btn = document.querySelector(".btn");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

function printResult() {
  if (validate() === false) {
    return;
  }

  const randomNumber = Math.floor(
    Math.random() * (parseInt(rangeNumber.value, 10) + 1)
  );

  const isWon =
    randomNumber === parseInt(inputNumber.value, 10) ? "won" : "lost";

  result1.innerText = `
  You chose: ${inputNumber.value}, the machine chose: ${randomNumber}.`;

  result2.innerText = `
  You ${isWon}!`;
}

function validate() {
  if (
    rangeNumber.value === "" ||
    inputNumber.value === "" ||
    parseInt(rangeNumber.value, 10) < 0
  ) {
    console.log("return false;");
    return false;
  }
}

function init() {
  btn.addEventListener("click", printResult);
}

init();
