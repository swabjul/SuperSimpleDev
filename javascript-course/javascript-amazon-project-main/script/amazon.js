document.addEventListener("DOMContentLoaded", e => {

  let productHTML = "";
  
  products.forEach((product) => {
  
    const {image, name, priceCents} = product;
     productHTML += `
      <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${image}">
      </div>
  
      <div class="product-name limit-text-to-2-lines">
        ${name}
      </div>
  
      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
        ${product.rating.count}
        </div>
      </div>
  
      <div class="product-price">
        $${(priceCents / 100).toFixed(2)}
      </div>
  
      <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
  
      <div class="product-spacer"></div>
  
      <div class="added-to-cart js-checkmark-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>
  
      <button class="js-add-to-cart add-to-cart-button button-primary" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
    `
  });
  
  document.querySelector(".js-products-grid").innerHTML = productHTML;


  let setTimeoutId;

  document.querySelectorAll(".js-add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const {productId} = button.dataset;
      let matchingItem;

      const selectElem = document.querySelector(`.js-quantity-selector-${productId}`)
      const quantity = Number(selectElem.value);

      cart.forEach(item => {
        if (productId === item.productId) matchingItem = item;
      });

      if (matchingItem) {
        matchingItem.quantity += quantity;

      } else {
        cart.push({productId, quantity});
      }

      console.log(cart);


      let cartQuantity = 0;

      cart.forEach(item => {
        cartQuantity += item.quantity
      });

      document.querySelector(".js-cart-quantity").innerText = cartQuantity;

      
      const addedMark = document.querySelector(`.js-checkmark-${productId}`)
      addedMark.classList.add("visible");

      clearTimeout(setTimeoutId);

      setTimeoutId = setTimeout(() => {
        addedMark.classList.remove("visible");
      },2000);





    });
  });









});
  
 