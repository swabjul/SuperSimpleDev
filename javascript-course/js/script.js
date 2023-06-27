let calculation = localStorage.getItem("calculator") || "";

function calc(num) {
  calculation += num;
  document.querySelector('.js-calculator').innerText = calculation;
  localStorage.setItem("calculator", calculation)
}

function calculatorTotal() {
  document.querySelector('.js-calculator').innerText = eval(calculation);
  localStorage.setItem("calculator", calculation)
}

function resetCalculator() {
  calculation = "";
  localStorage.removeItem("calculator");
  document.querySelector('.js-calculator').innerText = calculation;
}







document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector('.js-calculator').innerText = calculation;
})