const products = [
    { 
        id: 1, name: "NVIDIA RTX 4090", price: 75000, cat: "GPU", 
        desc: "24GB GDDR6X. Найпотужніша відеокарта для 4K геймінгу та професійного рендерингу. Підтримка Ray Tracing та DLSS 3.",
        image: "https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?q=80&w=400"
    },
    { 
        id: 2, name: "Intel Core i9-14900K", price: 24500, cat: "CPU", 
        desc: "24 ядра та 32 потоки. Частота до 6.0 GHz. Ідеально для ігор, стрімінгу та важких обчислень.",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=400"
    },
    { 
        id: 3, name: "ASUS ROG Z790", price: 18000, cat: "MB", 
        desc: "Преміальна плата з підтримкою DDR5 та Wi-Fi 6E. Потужна система живлення для розгону.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400"
    },
    { 
        id: 4, name: "NZXT Kraken Elite", price: 13000, cat: "Cool", 
        desc: "Рідинне охолодження з LCD-дисплеєм на помпі. Відображає температуру або власні GIF-анімації.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=400"
    },
    { 
        id: 5, name: "Corsair 64GB DDR5", price: 12000, cat: "RAM", 
        desc: "Надшвидка пам'ять 6400MHz. Низькі таймінги та RGB підсвітка для стильних систем.",
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=400"
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${p.image}" class="product-img" alt="${p.name}">
            </div>
            <div class="cat-tag">${p.cat}</div>
            <h3>${p.name}</h3>
            
            <button class="details-btn" onclick="toggleDetails(${p.id})">
                ДЕТАЛЬНІШЕ <i class="fas fa-chevron-down"></i>
            </button>
            
            <div id="details-${p.id}" class="details-content">
                <p>${p.desc}</p>
            </div>

            <p class="price">${p.price} грн</p>
            <button class="add-to-cart" onclick="addToCart(${p.id})">У КОШИК</button>
        </div>
    `).join('');
}

window.toggleDetails = function(id) {
    const content = document.getElementById(`details-${id}`);
    const btn = content.previousElementSibling;
    
    content.classList.toggle('active');
    btn.classList.toggle('active');
};

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
    for (let i = 0; i < 15; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        b.style.left = Math.random() * 100 + '%';
        b.style.width = b.style.height = Math.random() * 80 + 20 + 'px';
        b.style.animationDuration = Math.random() * 5 + 7 + 's';
        container.appendChild(b);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();
    createLava();
});
