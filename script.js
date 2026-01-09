const products = [
    { id: 1, name: "NVIDIA RTX 4090", price: 75000, cat: "GPU", desc: "24GB GDDR6X" },
    { id: 2, name: "Intel Core i9-14900K", price: 24500, cat: "CPU", desc: "24 Cores" },
    { id: 3, name: "ASUS Z790 ROG", price: 18000, cat: "MB", desc: "DDR5 Support" },
    { id: 4, name: "Ryzen 7 7800X3D", price: 17000, cat: "CPU", desc: "Gaming King" },
    { id: 5, name: "RTX 4060 Ti", price: 16000, cat: "GPU", desc: "8GB GDDR6" },
    { id: 6, name: "Kraken Elite 360", price: 13000, cat: "Cool", desc: "Liquid Cooler" },
    { id: 7, name: "Corsair 32GB DDR5", price: 6500, cat: "RAM", desc: "6000MHz" },
    { id: 8, name: "Samsung 990 Pro 2TB", price: 8500, cat: "SSD", desc: "NVMe Gen4" },
    { id: 9, name: "MSI B650 Tomahawk", price: 9500, cat: "MB", desc: "AM5 Socket" },
    { id: 10, name: "Noctua NH-D15", price: 4500, cat: "Cool", desc: "Air Cooler" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="cat-tag" style="color:var(--primary-green); font-size:0.7rem;">${p.cat}</div>
            <h3>${p.name}</h3>
            <p style="opacity:0.7; font-size:0.9rem;">${p.desc}</p>
            <p class="price">${p.price} грн</p>
            <button class="add-to-cart" onclick="addToCart(${p.id})">ДОДАТИ В КОШИК</button>
        </div>
    `).join('');
}

window.filterProducts = function(category) {
    const filtered = category === 'all' ? products : products.filter(p => p.cat === category);
    displayProducts(filtered);
};

window.addToCart = function(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
};

function updateCartCount() {
    const count = document.getElementById('cart-count');
    if (count) count.innerText = cart.length;
}

function createLava() {
    const container = document.querySelector('.lava-container');
    if (!container) return;
    for (let i = 0; i < 10; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        b.style.left = Math.random() * 100 + '%';
        b.style.width = b.style.height = Math.random() * 60 + 20 + 'px';
        b.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(b);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();
    createLava();
});
