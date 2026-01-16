const products = [
    { 
        id: 1, name: "NVIDIA RTX 4090", price: 75000, cat: "GPU", 
        desc: "24GB GDDR6X. Найпотужніша карта для 4K. Підтримка Ray Tracing та DLSS 3.",
        image: "https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?q=80&w=400"
    },
    { 
        id: 2, name: "ASUS TUF RTX 4070 Ti", price: 38000, cat: "GPU", 
        desc: "12GB GDDR6X. Надійне охолодження, ідеально для 2K геймінгу на ультра-налаштуваннях.",
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=400"
    },
    { 
        id: 3, name: "MSI Ventus RTX 4060", price: 14500, cat: "GPU", 
        desc: "8GB GDDR6. Енергоефективна карта для стабільного геймінгу в Full HD.",
        image: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=400"
    },

    { 
        id: 4, name: "Intel Core i9-14900K", price: 24500, cat: "CPU", 
        desc: "24 ядра, до 6.0 GHz. Топовий вибір для ігор та рендерингу.",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=400"
    },
    { 
        id: 5, name: "AMD Ryzen 7 7800X3D", price: 17500, cat: "CPU", 
        desc: "8 ядер, 3D V-Cache. Найкращий ігровий процесор за версією більшості геймерів.",
        image: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=400"
    },
    { 
        id: 6, name: "Intel Core i5-13600K", price: 13200, cat: "CPU", 
        desc: "14 ядер. Збалансований варіант для потужного ігрового ПК середнього сегменту.",
        image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=400"
    },

    { 
        id: 7, name: "ASUS ROG Z790-E", price: 18000, cat: "MB", 
        desc: "Підтримка DDR5, Wi-Fi 6E, PCIe 5.0. Преміальна база для Intel 14-го покоління.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400"
    },
    { 
        id: 8, name: "MSI MAG B650 Tomahawk", price: 9200, cat: "MB", 
        desc: "Надійна плата для сокета AM5 (Ryzen 7000/8000). Відмінне охолодження фаз живлення.",
        image: "https://images.unsplash.com/photo-1551448579-f480c527b15a?q=80&w=400"
    },
    { 
        id: 13, name: "Gigabyte Z790 AORUS ELITE", price: 11500, cat: "MB", 
        desc: "Висока якість збірки, підтримка DDR5 7600MHz та потужний VRM для розгону.",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e0de?q=80&w=400"
    },

    { 
        id: 9, name: "Corsair Vengeance 32GB", price: 5800, cat: "RAM", 
        desc: "DDR5 6000MHz CL36. Компактні радіатори та висока швидкість роботи.",
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=400"
    },
    { 
        id: 10, name: "G.Skill Trident Z5 RGB 32GB", price: 7200, cat: "RAM", 
        desc: "DDR5 7200MHz. Неймовірна швидкість та найкраща RGB підсвітка.",
        image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?q=80&w=400"
    },
    { 
        id: 14, name: "Kingston FURY Beast 16GB", price: 2900, cat: "RAM", 
        desc: "DDR5 5600MHz. Надійний і доступний вибір для сучасної ігрової системи.",
        image: "https://images.unsplash.com/photo-1551448579-f480c527b15a?q=80&w=400"
    },

    { 
        id: 11, name: "NZXT Kraken Elite 360", price: 13000, cat: "Cool", 
        desc: "Рідинне охолодження з LCD дисплеєм. Повний контроль температур у реальному часі.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=400"
    },
    { 
        id: 12, name: "Noctua NH-D15 chromax.black", price: 4600, cat: "Cool", 
        desc: "Легендарне повітряне охолодження. Тихіше та ефективніше за багато СРО.",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=400"
    },
    { 
        id: 15, name: "DeepCool AK620 Digital", price: 3400, cat: "Cool", 
        desc: "Потужний повітряний кулер з цифровим дисплеєм температури процесора.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=400"
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
