function toggle10E(selector) {

  const btnElem = document.querySelector(`.js-btn-toggle-${selector}`);
  const isToggled = btnElem.classList.contains("is-toggled")


  if (!isToggled) {
    btnElem.classList.add("is-toggled");
  } else {
    btnElem.classList.remove("is-toggled");
  }



}