document.addEventListener("DOMContentLoaded", function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');
    
    console.log(productId); // prints "123"
    
    // Get the "Add to Cart" button element
    const addToCartButton = document.getElementById('add-to-cart');
    
    // Add a click event listener to the button
    addToCartButton.addEventListener('click', () => {
      // Get the product information from the page
      const productId = '123'; // Replace with the actual product ID
      const productName = 'Product Name'; // Replace with the actual product name
      const productPrice = 99.99; // Replace with the actual product price
      const productImage = 'product-image.jpg'; // Replace with the actual product image URL
    
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
