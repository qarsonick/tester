let cart = JSON.parse(localStorage.getItem('cart')) || [];
const container = document.getElementById('cart-items');
const totalElement = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

function renderCart() {
    if (cart.length === 0) {
        container.innerHTML = "<p>Кошик порожній</p>";
        totalElement.innerText = "";
        checkoutBtn.style.display = "none";
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="product-card" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span>${item.name}</span>
            <span>${item.price} грн</span>
            <button onclick="removeFromCart(${index})" style="background:red;">Видалити</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.innerText = `Загальна сума: ${total} грн`;
    checkoutBtn.style.display = "block";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

checkoutBtn.addEventListener('click', () => {
    alert("Дякуємо за замовлення! Менеджер зв'яжеться з вами.");
    localStorage.removeItem('cart');
    location.reload();
});

renderCart();
