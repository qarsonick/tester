const products = [
    // Відеокарти
    { id: 1, name: "NVIDIA RTX 4090", price: 75000, cat: "GPU", desc: "24GB GDDR6X" },
    { id: 2, name: "AMD Radeon RX 7900 XTX", price: 42000, cat: "GPU", desc: "24GB GDDR6" },
    { id: 3, name: "NVIDIA RTX 4070 Ti", price: 34000, cat: "GPU", desc: "12GB GDDR6X" },
    
    // Процесори
    { id: 4, name: "Intel Core i9-14900K", price: 24500, cat: "CPU", desc: "24 Cores / 32 Threads" },
    { id: 5, name: "AMD Ryzen 7 7800X3D", price: 16800, cat: "CPU", desc: "Best for Gaming" },
    { id: 6, name: "Intel Core i5-13600K", price: 12000, cat: "CPU", desc: "14 Cores" },

    // Материнські плати
    { id: 7, name: "ASUS ROG MAXIMUS Z790", price: 28000, cat: "MB", desc: "LGA1700, DDR5" },
    { id: 8, name: "MSI MPG B650 Carbon", price: 11500, cat: "MB", desc: "AM5, WiFi 6E" },

    // Охолодження
    { id: 9, name: "NZXT Kraken Elite 360", price: 13000, cat: "Cool", desc: "Liquid Cooler with LCD" },
    { id: 10, name: "Noctua NH-D15 chromax.black", price: 4800, cat: "Cool", desc: "Air Cooler" },
    
    // Оперативна пам'ять
    { id: 11, name: "G.Skill Trident Z5 32GB", price: 6500, cat: "RAM", desc: "DDR5-6000MHz" },
    { id: 12, name: "Kingston FURY Beast 16GB", price: 2800, cat: "RAM", desc: "DDR4-3200MHz" }
];

const productGrid = document.getElementById('product-grid');

function renderProducts(filter = 'all') {
    if(!productGrid) return;
    
    const filtered = filter === 'all' ? products : products.filter(p => p.cat === filter);
    
    productGrid.innerHTML = filtered.map((p, i) => `
        <div class="product-card" style="animation-delay: ${i * 0.05}s">
            <div class="cat-tag">${p.cat}</div>
            <h3>${p.name}</h3>
            <p style="font-size: 0.8rem; color: #888;">${p.desc}</p>
            <p class="price">${p.price} грн</p>
            <button onclick="addToCart(${p.id})">В кошик</button>
        </div>
    `).join('');
}

// Додаємо бульбашки для футера
function createLava() {
    const container = document.querySelector('.lava-container');
    if(!container) return;
    for(let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 60 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = Math.random() * 5 + 5 + 's';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(bubble);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    createLava();
});
