// 1. БУРГЕР МЕНЮ (РАБОТАЕТ ВЕЗДЕ)
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if(burger) {
    burger.addEventListener('click', () => menu.classList.toggle('active'));
}

// 2. ЛАВА-ЛАМПА (РАБОТАЕТ ВЕЗДЕ)
const bubbleContainer = document.getElementById('bubbles-container');
if(bubbleContainer) {
    setInterval(() => {
        const b = document.createElement('div');
        b.className = 'bubble';
        const size = Math.random() * 50 + 20 + 'px';
        b.style.width = size; b.style.height = size;
        b.style.left = Math.random() * 100 + '%';
        bubbleContainer.appendChild(b);
        setTimeout(() => b.remove(), 4000);
    }, 450);
}

// 3. ЛОГИКА РЕГИСТРАЦИИ (СОХРАНЕНИЕ В ПАМЯТЬ БРАУЗЕРА)
function saveUser() {
    const name = document.getElementById('username').value;
    if(name) {
        localStorage.setItem('cyberUserName', name);
        alert("Профиль создан! Система разблокирована.");
        window.location.href = 'index.html'; // Редирект на главную
    }
}

// 4. ПРОВЕРКА ДОСТУПА В КОРЗИНЕ
const keypadWrapper = document.getElementById('keypad-wrapper');
if(keypadWrapper) {
    const user = localStorage.getItem('cyberUserName');
    if(user) {
        keypadWrapper.classList.remove('locked');
        document.getElementById('lock-msg').style.display = 'none';
    }
}

// 5. ГЕНЕРАЦИЯ ТОВАРОВ В КАТАЛОГЕ
const grid = document.getElementById('products-grid');
if(grid) {
    const prods = [
        {n: "RTX 4090", p: "200k", i: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300"},
        {n: "i9-14900K", p: "70k", i: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=300"},
        {n: "Z790 Motherboard", p: "40k", i: "https://images.unsplash.com/photo-1555617766-c94804975da3?w=300"},
        {n: "HyperX 64GB", p: "25k", i: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300"},
        {n: "Lian Li Case", p: "15k", i: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300"}
    ];
    prods.forEach(x => {
        grid.innerHTML += `<div class="product-card">
            <img src="${x.i}">
            <h3>${x.n}</h3>
            <p style="color:#00ff41">${x.p}</p>
            <button class="buy-btn-main" onclick="location.href='cart.html'">В КОРЗИНУ</button>
        </div>`;
    });
}

// 6. КНОПКА ЗАКАЗА (ТВОЯ КЛАВИАТУРА)
const buyBtn = document.getElementById('buy-btn');
if(buyBtn) {
    buyBtn.addEventListener('click', () => {
        alert("ЗАКАЗ ОТПРАВЛЕН В ПРОДАКШЕН!");
    });
}
