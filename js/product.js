import { PRODUCT_DATA } from "./product-data.js";

document.addEventListener("DOMContentLoaded", function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');
    
    const product = PRODUCT_DATA.find(product => product.id == productId);

    // Get the product information from the page
    const productName = product.name;
    const productPrice = product.price;
    const productImage = product.imageUrl;
    const productDescription = product.description;
    console.log(productName);
    // Dynamically render page
    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-price').innerText = `$${productPrice}`;
    document.getElementById('product-description').innerText = productDescription;

    // Get the "Add to Cart" button element
    const addToCartButton = document.getElementById('add-to-cart');
    
    // Add a click event listener to the button
    addToCartButton.addEventListener('click', () => {  
      // Get the user's cart data from localStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
      // Check if the product is already in the cart
      const existingItem = cart.find(item => item.id === productId);
    
      if (existingItem) {
        // If the product is already in the cart, increase the quantity
        existingItem.quantity++;
      } else {
        // If the product is not in the cart, add a new item
        cart.push({
          id: productId,
          name: productName,
          price: productPrice,
          image: productImage,
          quantity: 1
        });
      }
    
      // Save the updated cart data back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
    });
      });
