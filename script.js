const products = [
    { id: 1, name: "NVIDIA RTX 4090", price: 75000, cat: "GPU", desc: "24GB GDDR6X. Найпотужніша карта для 4K.", image: "https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?q=80&w=400" },
    { id: 2, name: "ASUS TUF RTX 4070 Ti", price: 38000, cat: "GPU", desc: "12GB GDDR6X. Надійне охолодження.", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=400" },
    { id: 3, name: "MSI Ventus RTX 4060", price: 14500, cat: "GPU", desc: "8GB GDDR6. Для Full HD геймінгу.", image: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=400" },
    { id: 4, name: "Intel Core i9-14900K", price: 24500, cat: "CPU", desc: "24 ядра, до 6.0 GHz. Топовий вибір.", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=400" },
    { id: 5, name: "AMD Ryzen 7 7800X3D", price: 17500, cat: "CPU", desc: "Найкращий ігровий процесор з 3D V-Cache.", image: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=400" },
    { id: 6, name: "Intel Core i5-13600K", price: 13200, cat: "CPU", desc: "14 ядер. Збалансований варіант.", image: "https://defis.ua/image/cache/catalog/2/23/23569_1-xW.jpg" },
    { id: 7, name: "ASUS ROG Z790-E", price: 18000, cat: "MB", desc: "Підтримка DDR5 та PCIe 5.0.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400" },
    { id: 8, name: "MSI MAG B650 Tomahawk", price: 9200, cat: "MB", desc: "Надійна плата для сокета AM5.", image: "https://u-misti.zhitomir.ua/wp-content/uploads/2026/01/materynska-plata.webp" },
    { id: 13, name: "Gigabyte Z790 AORUS", price: 11500, cat: "MB", desc: "Якісна система живлення для розгону.", image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2203/innergigabyteimages/specsmall02.jpg" },
    { id: 9, name: "Corsair Vengeance 32GB", price: 5800, cat: "RAM", desc: "DDR5 6000MHz CL36. Швидка пам'ять.", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=400" },
    { id: 10, name: "G.Skill Trident Z5 RGB", price: 7200, cat: "RAM", desc: "DDR5 7200MHz з яскравою підсвіткою.", image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?q=80&w=400" },
    { id: 14, name: "Kingston FURY Beast", price: 2900, cat: "RAM", desc: "16GB DDR5 5600MHz. Надійний вибір.", image: "https://hyperpc.kz/images/catalog/hardware/memory/kingston/beast-rgb-ddr5/kingston-fury-beast-rgb-ddr5-5200-2x16gb.jpg" },
    { id: 11, name: "NZXT Kraken Elite 360", price: 13000, cat: "Cool", desc: "Рідинне охолодження з LCD дисплеєм.", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=400" },
    { id: 12, name: "Noctua NH-D15", price: 4600, cat: "Cool", desc: "Легендарне повітряне охолодження.", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=400" },
    { id: 15, name: "DeepCool AK620 Digital", price: 3400, cat: "Cool", desc: "Кулер з цифровим індикатором температури.", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=400" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let likes = JSON.parse(localStorage.getItem('likes')) || [];

function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => {
        const isLiked = likes.some(l => l.id === p.id);
        return `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${p.image}" class="product-img" alt="${p.name}">
                <button class="like-btn ${isLiked ? 'active' : ''}" onclick="toggleLike(${p.id})">
                    <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
                </button>
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
    `}).join('');
}

window.toggleDetails = function(id) {
    const content = document.getElementById(`details-${id}`);
    if (content) content.classList.toggle('active');
};

window.toggleLike = function(id) {
    const p = products.find(i => i.id === id);
    const index = likes.findIndex(l => l.id === id);
    if (index === -1) { likes.push(p); } 
    else { likes.splice(index, 1); }
    localStorage.setItem('likes', JSON.stringify(likes));
    displayProducts(products);
    updateCounts();
};

window.addToCart = function(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
};

function updateCounts() {
    if (document.getElementById('cart-count')) document.getElementById('cart-count').innerText = cart.length;
    if (document.getElementById('like-count')) document.getElementById('like-count').innerText = likes.length;
}

window.filterProducts = function(cat) {
    const filtered = cat === 'all' ? products : products.filter(p => p.cat === cat);
    displayProducts(filtered);
};

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCounts();
});
