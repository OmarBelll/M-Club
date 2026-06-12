// Language translations
const translations = {
    fr: {
        // ... (keep all your existing translations)
        // Add these new translations:
        orders_btn: "Mes commandes",
        orders_title: "Mes commandes",
        no_orders: "Aucune commande pour le moment",
        print_receipt: "Imprimer le reçu",
        receipt_title: "REÇU D'ACHAT",
        receipt_thanks: "Merci pour votre confiance !",
        receipt_footer: "M Club Sfax - Rte Lafrane, Sfax, Tunisie\nTél: +216 74 217 600"
    },
    en: {
        // ... (keep all your existing translations)
        orders_btn: "My Orders",
        orders_title: "My Orders",
        no_orders: "No orders yet",
        print_receipt: "Print Receipt",
        receipt_title: "PURCHASE RECEIPT",
        receipt_thanks: "Thank you for your trust!",
        receipt_footer: "M Club Sfax - Rte Lafrane, Sfax, Tunisia\nTel: +216 74 217 600"
    },
    ar: {
        // ... (keep all your existing translations)
        orders_btn: "طلباتي",
        orders_title: "طلباتي",
        no_orders: "لا توجد طلبات بعد",
        print_receipt: "طباعة الإيصال",
        receipt_title: "إيصال الشراء",
        receipt_thanks: "شكرا لثقتكم!",
        receipt_footer: "إم كلوب صفاقس - طريق لافران، صفاقس، تونس\nهاتف: +216 74 217 600"
    }
};

let currentLang = 'fr';

// Initialize AOS
AOS.init({ duration: 800, once: true, offset: 100 });

// ========== COUNTER ANIMATION ==========
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stats-section').forEach(section => {
    observer.observe(section);
});

// ========== STICKY HEADER ==========
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== MOBILE MENU ==========
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileToggle.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        document.body.classList.toggle('menu-open', nav.classList.contains('active'));
    });
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.classList.remove('menu-open');
    });
});

// ========== DARK MODE TOGGLE ==========
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ========== LIGHTBOX GALLERY ==========
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});
document.querySelector('.close-lightbox').addEventListener('click', () => {
    lightbox.style.display = 'none';
});
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});

// ========== FAQ ACCORDION ==========
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// ========== IMC CALCULATOR ==========
function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight')?.value);
    const heightCm = parseFloat(document.getElementById('height')?.value);
    
    if (!weight || !heightCm || isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById('imc-value').textContent = '--';
        document.getElementById('imc-status').textContent = 'Veuillez entrer des valeurs valides';
        return;
    }
    
    const heightM = heightCm / 100;
    const imc = weight / (heightM * heightM);
    const imcValue = imc.toFixed(1);
    
    document.getElementById('imc-value').textContent = imcValue;
    
    let status = '';
    let color = '';
    
    if (imc < 18.5) {
        status = translations[currentLang].imc_underweight;
        color = '#2196F3';
    } else if (imc < 25) {
        status = translations[currentLang].imc_normal;
        color = '#4CAF50';
    } else if (imc < 30) {
        status = translations[currentLang].imc_overweight;
        color = '#FF9800';
    } else {
        status = translations[currentLang].imc_obesity;
        color = '#f44336';
    }
    
    const statusEl = document.getElementById('imc-status');
    statusEl.textContent = status;
    statusEl.style.color = color;
}

const calculateBtn = document.getElementById('calculate-imc');
if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateIMC);
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    if (weightInput) weightInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') calculateIMC(); });
    if (heightInput) heightInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') calculateIMC(); });
}

// ========== PROFILE VALIDATION ==========
function validateProfileForm() {
    let isValid = true;
    const age = document.getElementById('profile-age').value;
    const weight = document.getElementById('profile-weight').value;
    const height = document.getElementById('profile-height').value;
    
    if (age && (age < 12 || age > 120)) {
        document.getElementById('age-validation').textContent = translations[currentLang].age_error;
        isValid = false;
    } else {
        document.getElementById('age-validation').textContent = '';
    }
    
    if (weight && (weight < 20 || weight > 300)) {
        document.getElementById('weight-validation').textContent = translations[currentLang].weight_error;
        isValid = false;
    } else {
        document.getElementById('weight-validation').textContent = '';
    }
    
    if (height && (height < 50 || height > 250)) {
        document.getElementById('height-validation').textContent = translations[currentLang].height_error;
        isValid = false;
    } else {
        document.getElementById('height-validation').textContent = '';
    }
    
    return isValid;
}

const ageInputField = document.getElementById('profile-age');
const weightInputField = document.getElementById('profile-weight');
const heightInputField = document.getElementById('profile-height');

if (ageInputField) ageInputField.addEventListener('input', validateProfileForm);
if (weightInputField) weightInputField.addEventListener('input', validateProfileForm);
if (heightInputField) heightInputField.addEventListener('input', validateProfileForm);

// ========== CART SYSTEM WITH QUANTITY CONTROLS ==========
let cart = [];

function loadCart() {
    const savedCart = localStorage.getItem('mclub_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartDisplay();
}

function saveCart() {
    localStorage.setItem('mclub_cart', JSON.stringify(cart));
}

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    saveCart();
    updateCartDisplay();
    showNotification(`${productName} ajouté au panier !`);
}

function updateQuantity(index, delta) {
    const newQuantity = cart[index].quantity + delta;
    if (newQuantity <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = newQuantity;
    }
    saveCart();
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>${translations[currentLang].cart_empty}</p>`;
        if (cartCount) cartCount.textContent = '0';
        if (cartTotal) cartTotal.textContent = '0 DT';
        return;
    }
    
    let total = 0;
    let itemCount = 0;
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemCount += item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} DT</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn dec-qty" data-index="${index}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn inc-qty" data-index="${index}">+</button>
            </div>
            <button class="remove-item" data-index="${index}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartContainer.appendChild(cartItem);
    });
    
    if (cartCount) cartCount.textContent = itemCount;
    if (cartTotal) cartTotal.textContent = `${total} DT`;
    
    // Add event listeners for quantity buttons
    document.querySelectorAll('.dec-qty').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.getAttribute('data-index'));
            updateQuantity(index, -1);
        });
    });
    
    document.querySelectorAll('.inc-qty').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.getAttribute('data-index'));
            updateQuantity(index, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
}

function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    if (isError) notification.classList.add('error');
    notification.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-triangle' : 'fa-check-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => { notification.remove(); }, 3000);
}

// Add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.getAttribute('data-product');
        const price = parseInt(btn.getAttribute('data-price'));
        addToCart(productName, price);
    });
});

// Cart UI
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.querySelector('.close-cart');

if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });
}

if (closeCart) {
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });
}

// ========== ORDERS SYSTEM ==========
let orders = [];

function loadOrders() {
    const savedOrders = localStorage.getItem('mclub_orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
}

function saveOrders() {
    localStorage.setItem('mclub_orders', JSON.stringify(orders));
}

function addOrder(order) {
    orders.unshift(order); // Add to beginning (newest first)
    saveOrders();
}

// ========== CHECKOUT WITH ORDER SAVING AND RECEIPT ==========
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', async () => {
        if (cart.length === 0) {
            showNotification('Votre panier est vide', true);
            return;
        }
        
        // Show loading state
        const originalText = checkoutBtn.innerHTML;
        checkoutBtn.innerHTML = '<span class="loading-spinner"></span> Traitement...';
        checkoutBtn.disabled = true;
        
        // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Create order object
        const order = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: [...cart],
            total: total,
            userEmail: currentUser ? currentUser.email : 'guest@example.com',
            userName: currentUser ? currentUser.name : 'Invité'
        };
        
        // Save order
        addOrder(order);
        
        // Show receipt
        showReceipt(order);
        
        // Clear cart
        cart = [];
        saveCart();
        updateCartDisplay();
        cartSidebar.classList.remove('open');
        
        // Reset button
        checkoutBtn.innerHTML = originalText;
        checkoutBtn.disabled = false;
        
        showNotification(`Merci ! Votre commande de ${total} DT a été enregistrée.`);
    });
}

// ========== RECEIPT FUNCTIONALITY ==========
const receiptModal = document.getElementById('receipt-modal');
const receiptContent = document.getElementById('receipt-content');
const closeReceipt = document.querySelector('.close-receipt');
const printReceiptBtn = document.getElementById('print-receipt-btn');

function showReceipt(order) {
    const date = new Date(order.date).toLocaleString();
    const itemsHtml = order.items.map(item => `
        <div class="receipt-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>${item.price * item.quantity} DT</span>
        </div>
    `).join('');
    
    receiptContent.innerHTML = `
        <div class="receipt-header">
            <h3>${translations[currentLang].receipt_title}</h3>
            <p>${translations[currentLang].brand}</p>
            <p>${date}</p>
            <p>Commande #${order.id}</p>
        </div>
        <div class="receipt-items">
            ${itemsHtml}
        </div>
        <div class="receipt-total">
            <span>${translations[currentLang].cart_total}</span>
            <span>${order.total} DT</span>
        </div>
        <div class="receipt-footer">
            <p>${translations[currentLang].receipt_thanks}</p>
            <p>${translations[currentLang].receipt_footer}</p>
        </div>
    `;
    
    receiptModal.style.display = 'flex';
}

if (closeReceipt) {
    closeReceipt.addEventListener('click', () => {
        receiptModal.style.display = 'none';
    });
}

if (printReceiptBtn) {
    printReceiptBtn.addEventListener('click', () => {
        window.print();
    });
}

// Close receipt when clicking outside
receiptModal.addEventListener('click', (e) => {
    if (e.target === receiptModal) {
        receiptModal.style.display = 'none';
    }
});

// ========== ORDERS MODAL ==========
const ordersModal = document.getElementById('orders-modal');
const ordersList = document.getElementById('orders-list');
const closeOrders = document.querySelector('.close-orders');
const ordersBtn = document.getElementById('orders-btn');

function showOrders() {
    if (!ordersList) return;
    
    if (orders.length === 0) {
        ordersList.innerHTML = `<p>${translations[currentLang].no_orders}</p>`;
    } else {
        ordersList.innerHTML = orders.map(order => `
            <div class="order-item" data-order-id="${order.id}">
                <div class="order-header">
                    <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
                    <span class="order-total">${order.total} DT</span>
                </div>
                <div class="order-items-preview">
                    ${order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}
                </div>
            </div>
        `).join('');
        
        // Add click event to view receipt
        document.querySelectorAll('.order-item').forEach(item => {
            item.addEventListener('click', () => {
                const orderId = parseInt(item.getAttribute('data-order-id'));
                const order = orders.find(o => o.id === orderId);
                if (order) {
                    ordersModal.style.display = 'none';
                    showReceipt(order);
                }
            });
        });
    }
    
    ordersModal.style.display = 'flex';
}

if (ordersBtn) {
    ordersBtn.addEventListener('click', () => {
        showOrders();
    });
}

if (closeOrders) {
    closeOrders.addEventListener('click', () => {
        ordersModal.style.display = 'none';
    });
}

ordersModal.addEventListener('click', (e) => {
    if (e.target === ordersModal) {
        ordersModal.style.display = 'none';
    }
});

// ========== AUTHENTIFICATION SYSTEM ==========
let currentUser = null;

function loadUsers() {
    const users = localStorage.getItem('mclub_users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('mclub_users', JSON.stringify(users));
}

function saveCurrentUser(user) {
    localStorage.setItem('mclub_current_user', JSON.stringify(user));
    currentUser = user;
}

function loadCurrentUser() {
    const user = localStorage.getItem('mclub_current_user');
    if (user) {
        currentUser = JSON.parse(user);
        updateUserUI();
    }
}

function updateUserUI() {
    const userNameDisplay = document.getElementById('user-name-display');
    const userIconDiv = document.getElementById('user-icon');
    
    if (currentUser) {
        if (userNameDisplay) userNameDisplay.textContent = currentUser.name;
        if (userIconDiv) {
            if (currentUser.avatar) {
                userIconDiv.innerHTML = `<img src="${currentUser.avatar}" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover;">`;
            } else {
                userIconDiv.innerHTML = `<i class="fas fa-user-circle"></i>`;
            }
        }
    } else {
        if (userNameDisplay) userNameDisplay.textContent = '';
        if (userIconDiv) userIconDiv.innerHTML = `<i class="fas fa-user-circle"></i>`;
    }
}

function registerUser(name, email, password) {
    const users = loadUsers();
    if (users.find(u => u.email === email)) {
        return { success: false, message: "Cet email est déjà utilisé" };
    }
    
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        avatar: null,
        age: '',
        weight: '',
        height: '',
        goal: 'health',
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    saveCurrentUser(newUser);
    updateUserUI();
    return { success: true };
}

function loginUser(email, password) {
    const users = loadUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        saveCurrentUser(user);
        updateUserUI();
        return { success: true };
    }
    return { success: false, message: "Email ou mot de passe incorrect" };
}

function logoutUser() {
    localStorage.removeItem('mclub_current_user');
    currentUser = null;
    updateUserUI();
}

function updateUserProfile(updates) {
    if (!currentUser) return;
    const users = loadUsers();
    const index = users.findIndex(u => u.id === currentUser.id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updates };
        saveUsers(users);
        saveCurrentUser(users[index]);
        updateUserUI();
    }
}

// Auth Modal Elements
const authModal = document.getElementById('auth-modal');
const profileModal = document.getElementById('profile-modal');
const userIconElement = document.getElementById('user-icon');
const userDropdown = document.getElementById('user-dropdown');
const profileBtn = document.getElementById('profile-btn');
const logoutButton = document.getElementById('logout-btn');

if (userIconElement) {
    userIconElement.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentUser) {
            userDropdown.classList.toggle('show');
        } else {
            authModal.style.display = 'flex';
        }
    });
}

document.addEventListener('click', () => {
    if (userDropdown) userDropdown.classList.remove('show');
});

if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        userDropdown.classList.remove('show');
        openProfileModal();
    });
}

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        logoutUser();
        userDropdown.classList.remove('show');
        showNotification('Vous avez été déconnecté');
    });
}

// Auth tabs
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        tab.classList.add('active');
        const tabName = tab.getAttribute('data-tab');
        document.getElementById(`${tabName}-form`).classList.add('active');
    });
});

// Login form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const result = loginUser(email, password);
        if (result.success) {
            authModal.style.display = 'none';
            document.getElementById('login-form').reset();
            showNotification('Connexion réussie ! Bienvenue ' + currentUser.name);
        } else {
            document.getElementById('login-error').textContent = result.message;
        }
    });
}

// Register form
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirm = document.getElementById('register-confirm').value;
        
        if (password !== confirm) {
            document.getElementById('register-error').textContent = "Les mots de passe ne correspondent pas";
            return;
        }
        
        const result = registerUser(name, email, password);
        if (result.success) {
            authModal.style.display = 'none';
            document.getElementById('register-form').reset();
            showNotification('Inscription réussie ! Bienvenue ' + name);
        } else {
            document.getElementById('register-error').textContent = result.message;
        }
    });
}

// Close modals
const closeAuth = document.querySelector('.close-auth');
const closeProfileModal = document.querySelector('.close-profile');
if (closeAuth) {
    closeAuth.addEventListener('click', () => {
        authModal.style.display = 'none';
    });
}
if (closeProfileModal) {
    closeProfileModal.addEventListener('click', () => {
        profileModal.style.display = 'none';
    });
}

function openProfileModal() {
    if (!currentUser) return;
    document.getElementById('profile-name').value = currentUser.name || '';
    document.getElementById('profile-email').value = currentUser.email || '';
    document.getElementById('profile-age').value = currentUser.age || '';
    document.getElementById('profile-weight').value = currentUser.weight || '';
    document.getElementById('profile-height').value = currentUser.height || '';
    document.getElementById('profile-goal').value = currentUser.goal || 'health';
    if (currentUser.avatar) {
        document.getElementById('profile-avatar-img').src = currentUser.avatar;
    }
    profileModal.style.display = 'flex';
}

const profileFormElement = document.getElementById('profile-form');
if (profileFormElement) {
    profileFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateProfileForm()) {
            showNotification('Veuillez corriger les erreurs dans le formulaire', true);
            return;
        }
        
        const updates = {
            name: document.getElementById('profile-name').value,
            age: document.getElementById('profile-age').value,
            weight: document.getElementById('profile-weight').value,
            height: document.getElementById('profile-height').value,
            goal: document.getElementById('profile-goal').value
        };
        updateUserProfile(updates);
        profileModal.style.display = 'none';
        showNotification('Profil mis à jour !');
    });
}

const changeAvatarBtn = document.getElementById('change-avatar-btn');
const avatarUpload = document.getElementById('avatar-upload');
if (changeAvatarBtn && avatarUpload) {
    changeAvatarBtn.addEventListener('click', () => {
        avatarUpload.click();
    });
    avatarUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const avatarUrl = event.target.result;
                updateUserProfile({ avatar: avatarUrl });
                document.getElementById('profile-avatar-img').src = avatarUrl;
            };
            reader.readAsDataURL(file);
        }
    });
}

// Load data on startup
loadCurrentUser();
loadCart();
loadOrders();

// ========== NEWSLETTER FORM ==========
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const messageDiv = document.getElementById('form-message');
        if (email && email.includes('@') && email.includes('.')) {
            messageDiv.innerHTML = `<span style="color: green;">${translations[currentLang].subscribe_success}</span>`;
            document.getElementById('email').value = '';
            setTimeout(() => messageDiv.innerHTML = '', 5000);
        } else {
            messageDiv.innerHTML = `<span style="color: red;">${translations[currentLang].subscribe_error}</span>`;
            setTimeout(() => messageDiv.innerHTML = '', 5000);
        }
    });
}

// ========== LANGUAGE MANAGEMENT ==========
function updateLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.innerHTML && element.innerHTML.includes('<br>') && (key === 'hero_title' || key === 'health_title')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });
    
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.style.textAlign = 'right';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.style.textAlign = 'left';
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    validateProfileForm();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.getAttribute('data-lang');
        updateLanguage(currentLang);
    });
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.classList.remove('menu-open');
        }
    });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize language
updateLanguage('fr');

// Console warning
console.log('%c🔐 Note: This demo stores data in localStorage. For production, use a proper backend!', 'color: #f0b90b; font-size: 12px;');
