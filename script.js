const products = [
    { id: 1, name: "NVIDIA RTX 4090", price: 75000, category: "GPU" },
    { id: 2, name: "Intel Core i9-14900K", price: 24000, category: "CPU" },
    { id: 3, name: "ASUS ROG Z790", price: 18000, category: "Motherboard" },
    { id: 4, name: "Samsung 990 Pro 2TB", price: 8500, category: "SSD" },
    { id: 5, name: "Corsair Dominator 32GB DDR5", price: 7200, category: "RAM" },
    { id: 6, name: "be quiet! Dark Power 13", price: 9000, category: "PSU" }
];

const productGrid = document.getElementById('product-grid');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
    if(!productGrid) return;
    productGrid.innerHTML = products.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.1}s">
            <i class="fas fa-microchip style="font-size: 3rem; color: #444;"></i>
            <h3>${product.name}</h3>
            <p>Ціна: ${product.price} грн</p>
            <button onclick="addToCart(${product.id})">Додати в кошик</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} додано до кошика!`);
}

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if(countElement) countElement.innerText = cart.length;
}

// Burger menu logic
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if(burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

renderProducts();
updateCartCount();
