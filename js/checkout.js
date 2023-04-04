document.addEventListener("DOMContentLoaded", function() {
    // Get the cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Get the cart items list element from the page
    const cartItemsList = document.getElementById('cart-items');
    
    // Get the total price element from the page
    const totalPriceElement = document.getElementById('total-price');
    
    // Loop through the cart items and generate HTML for each item
    let cartItemsHtml = '';
    let totalPrice = 0;
    for (const item of cart) {
      const itemPrice = item.price * item.quantity;
      cartItemsHtml += `
        <li>
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p class="price">$${item.price.toFixed(2)} x ${item.quantity}</p>
          <p class="item-total-price">$${itemPrice.toFixed(2)}</p>
        </li>
      `;
      totalPrice += itemPrice;
    }
    
    // Update the cart items list element with the generated HTML
    cartItemsList.innerHTML = cartItemsHtml;
    
    // Update the total price element with the total price
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    
}); 
    