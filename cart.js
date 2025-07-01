const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 400 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Mouse", price: 50 },
  { id: 5, name: "Keyboard", price: 120 }
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button class="remove" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(div);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `Total: $${total}`;
}

// Initialize on load
displayProducts();
