function calcTotal() {
  const inputElem = document.querySelector(".js-calc-input");
  let total = 0;

  if (isNaN(inputElem.value)) {
    alert("Input is not a number");
    inputElem.value = "aaaa";
    return;
  }

  if (inputElem.value < 40) {
    total = Number(inputElem.value) + 10;
  } else {
    total = inputElem.value;
  }

  document.querySelector(".js-calculate-result").innerText = `$${total}`;

}