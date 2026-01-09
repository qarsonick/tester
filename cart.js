let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p style='font-size: 1.2rem; opacity: 0.5;'>Ваш кошик наразі порожній...</p>";
        totalEl.innerText = "";
        checkoutBtn.style.display = "none";
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="product-card">
            <div class="product-img-wrapper" style="height: 120px;">
                <img src="${item.image}" class="product-img">
            </div>
            <h3>${item.name}</h3>
            <p class="price">${item.price} грн</p>
            <button class="add-to-cart" style="background:#ff4444;" onclick="removeItem(${index})">ВИДАЛИТИ</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.innerText = `ЗАГАЛЬНА СУМА: ${total} грн`;
    checkoutBtn.style.display = "inline-block";
}

window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
};

document.getElementById('checkout-btn')?.addEventListener('click', () => {
    alert("Замовлення прийнято! Наш менеджер зв'яжеться з вами найближчим часом.");
    localStorage.removeItem('cart');
    window.location.href = "index.html";
});

renderCart();
