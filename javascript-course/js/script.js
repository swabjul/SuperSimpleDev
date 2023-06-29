function costCalcTotal() {
  const inputElem = document.querySelector(".js-cst-input");
  let cost = Number(inputElem.value);

  if (cost <= 0) {
    const errorMessage = `Error: cost cannot be less than $0`
    document.querySelector('.js-cst-total').innerHTML = `<span style="color:red">${errorMessage}</span>`
    return;
  }

  if (cost < 40) {
    cost = Math.round((cost + 10) * 100) / 100;
  } 

  document.querySelector('.js-cst-total').innerText = cost;
  inputElem.value = "";

}

function handlerKeyDownCst(event) {

  if (event.key === "Enter") {
    costCalcTotal();
  }
}