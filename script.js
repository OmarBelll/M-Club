// ========== MULTILINGUAL TRANSLATIONS ==========
// Complete translation system for French, English, and Arabic
const translations = {
    fr: {
        brand: "M CLUB SFAX",
        nav_home: "Accueil",
        nav_services: "Services",
        nav_coaches: "Coachs",
        nav_pricing: "Tarifs",
        nav_shop: "Boutique",
        nav_gallery: "Galerie",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        hero_title: "PLUS D'EXCUSES.<br>REMAÎTRE VOTRE CORPS.",
        hero_desc: "Que vous soyez à Sfax ou ailleurs, M Club vous offre un coaching personnalisé pour atteindre vos objectifs, où que vous soyez.",
        hero_btn: "COMMENCER MAINTENANT",
        health_title: "PLACEZ VOTRE<br>SANTÉ EN PREMIER",
        health_desc: "Faites de votre santé une priorité avec un entraînement adapté. Améliorez votre condition physique ou sculptez le corps de vos rêves grâce à des séances guidées qui vous conviennent, quand vous voulez, où vous voulez.",
        health_btn: "COMMENCER",
        card1_title: "GAGNER DU MUSCLE",
        card1_desc: "Définissez votre silhouette dès maintenant.",
        card2_title: "PERDRE DU POIDS",
        card2_desc: "Réduisez la graisse et voyez votre poids baisser.",
        card3_title: "AMÉLIORER L'ENDURANCE",
        card3_desc: "Augmentez votre résistance et votre stamina.",
        classes_title: "COURS COLLECTIFS",
        coaches_title: "NOS COACHS",
        pricing_title: "NOS ABONNEMENTS",
        gallery_title: "NOTRE SALLE EN IMAGES",
        testimonials_title: "CE QUE NOS MEMBRES DISENT",
        faq_title: "FOIRE AUX QUESTIONS",
        faq1_q: "Comment puis-je m'inscrire ?",
        faq1_a: "Vous pouvez vous inscrire directement en ligne via notre formulaire de contact ou venir nous rendre visite à la salle sur Route Lafrane.",
        faq2_q: "Y a-t-il un engagement ?",
        faq2_a: "Nos abonnements sont sans engagement. Vous pouvez résilier à tout moment avec un préavis de 15 jours.",
        faq3_q: "Proposez-vous des cours pour débutants ?",
        faq3_a: "Oui, tous nos cours sont adaptés aux débutants. Nos coachs vous accompagnent pas à pas.",
        hours_title: "HORAIRES D'OUVERTURE",
        map_title: "NOUS TROUVER",
        address_full: "Rte Lafrane, Sfax, Tunisie",
        open_maps: "Voir tous les avis →",
        mon_fri: "Lundi - Vendredi",
        sat_sun: "Samedi - Dimanche",
        holidays: "Jours fériés",
        plan_basic: "Basic",
        plan_premium: "Premium",
        plan_annual: "Annuel",
        choose_btn: "Choisir",
        training_title: "SÉANCES DE COACHING PERSONNALISÉ.",
        training_desc: "N'IMPORTE OÙ VOUS VOULEZ.",
        news_title: "Abonnez-vous aujourd'hui",
        news_desc: "Recevez nos offres et conseils fitness directement dans votre boîte mail.",
        news_btn: "S'ABONNER",
        contact_title: "NOUS CONTACTER",
        address: "Rte Lafrane, Sfax, Tunisie",
        copyright: "Tous droits réservés.",
        subscribe_success: "Merci ! Votre inscription a été reçue.",
        subscribe_error: "Une erreur s'est produite. Veuillez réessayer.",
        stat_members: "Membres actifs",
        stat_coaches: "Coach diplômés",
        stat_classes: "Cours par semaine",
        stat_days: "Jours d'ouverture",
        // Removed: popup_title, popup_desc, popup_btn
        imc_title: "CALCULEZ VOTRE IMC",
        imc_weight: "Poids (kg)",
        imc_height: "Taille (cm)",
        imc_btn: "Calculer",
        imc_underweight: "Insuffisance pondérale",
        imc_normal: "Poids normal",
        imc_overweight: "Surpoids",
        imc_obesity: "Obésité",
        shop_title: "BOUTIQUE M CLUB",
        shop_subtitle: "Équipez-vous avec nos produits exclusifs",
        product1_name: "T-shirt M Club",
        product1_desc: "Coton bio, imprimé logo, coupe sport",
        product2_name: "Bouteille isotherme",
        product2_desc: "Acier inoxydable, 750ml, noir/or",
        product3_name: "Bandeau anti-transpirant",
        product3_desc: "Microfibre respirante, absorbant",
        add_to_cart: "Ajouter au panier",
        cart_empty: "Votre panier est vide",
        cart_total: "Total",
        checkout: "Commander",
        login_tab: "Connexion",
        register_tab: "Inscription",
        email_label: "Email",
        password_label: "Mot de passe",
        name_label: "Nom complet",
        confirm_label: "Confirmer mot de passe",
        login_btn: "Se connecter",
        register_btn: "S'inscrire",
        profile_btn: "Mon Profil",
        logout_btn: "Déconnexion",
        profile_title: "Mon Profil",
        change_avatar: "Changer la photo",
        age_label: "Âge",
        weight_label: "Poids (kg)",
        height_label: "Taille (cm)",
        goal_label: "Objectif",
        goal_muscle: "Gagner du muscle",
        goal_weight: "Perdre du poids",
        goal_stamina: "Améliorer l'endurance",
        goal_health: "Bien-être général",
        save_btn: "Enregistrer"
    },
    en: {
        brand: "M CLUB SFAX",
        nav_home: "Home",
        nav_services: "Services",
        nav_coaches: "Coaches",
        nav_pricing: "Pricing",
        nav_shop: "Shop",
        nav_gallery: "Gallery",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        hero_title: "NO MORE EXCUSES.<br>GET FIT ANYWHERE.",
        hero_desc: "Whether you're in Sfax or elsewhere, M Club offers personalized coaching to help you reach your goals, wherever you are.",
        hero_btn: "START NOW",
        health_title: "PUT YOUR<br>HEALTH FIRST",
        health_desc: "Make your health a priority with tailored training. Improve your fitness or sculpt your dream body with guided sessions that work for you, when you want, where you want.",
        health_btn: "GET STARTED",
        card1_title: "GAIN MUSCLES",
        card1_desc: "Start seeing muscle definition now.",
        card2_title: "LOSE WEIGHT",
        card2_desc: "Trim fat and see your weight drop.",
        card3_title: "BUILD STAMINA",
        card3_desc: "Build endurance and increase your stamina.",
        classes_title: "GROUP CLASSES",
        coaches_title: "OUR COACHES",
        pricing_title: "OUR MEMBERSHIPS",
        gallery_title: "OUR GYM IN PICTURES",
        testimonials_title: "WHAT OUR MEMBERS SAY",
        faq_title: "FREQUENTLY ASKED QUESTIONS",
        faq1_q: "How can I register?",
        faq1_a: "You can register online via our contact form or visit us at the gym on Route Lafrane.",
        faq2_q: "Is there a commitment?",
        faq2_a: "Our memberships are commitment-free. You can cancel at any time with 15 days notice.",
        faq3_q: "Do you offer beginner classes?",
        faq3_a: "Yes, all our classes are beginner-friendly. Our coaches will guide you step by step.",
        hours_title: "OPENING HOURS",
        map_title: "FIND US",
        address_full: "Rte Lafrane, Sfax, Tunisia",
        open_maps: "View all reviews →",
        mon_fri: "Monday - Friday",
        sat_sun: "Saturday - Sunday",
        holidays: "Public Holidays",
        plan_basic: "Basic",
        plan_premium: "Premium",
        plan_annual: "Annual",
        choose_btn: "Choose",
        training_title: "PERSONAL TRAINING SESSIONS.",
        training_desc: "ANYWHERE YOU WANT.",
        news_title: "Subscribe Today",
        news_desc: "Receive our offers and fitness tips directly in your inbox.",
        news_btn: "SUBSCRIBE",
        contact_title: "GET IN TOUCH",
        address: "Rte Lafrane, Sfax, Tunisia",
        copyright: "All rights reserved.",
        subscribe_success: "Thank you! Your submission has been received.",
        subscribe_error: "Oops! Something went wrong. Please try again.",
        stat_members: "Active Members",
        stat_coaches: "Certified Coaches",
        stat_classes: "Weekly Classes",
        stat_days: "Open Days",
        // Removed: popup_title, popup_desc, popup_btn
        imc_title: "CALCULATE YOUR BMI",
        imc_weight: "Weight (kg)",
        imc_height: "Height (cm)",
        imc_btn: "Calculate",
        imc_underweight: "Underweight",
        imc_normal: "Normal weight",
        imc_overweight: "Overweight",
        imc_obesity: "Obesity",
        shop_title: "M CLUB SHOP",
        shop_subtitle: "Gear up with our exclusive products",
        product1_name: "M Club T-shirt",
        product1_desc: "Organic cotton, logo print, sporty fit",
        product2_name: "Insulated Bottle",
        product2_desc: "Stainless steel, 750ml, black/gold",
        product3_name: "Sweatband",
        product3_desc: "Breathable microfiber, absorbent",
        add_to_cart: "Add to cart",
        cart_empty: "Your cart is empty",
        cart_total: "Total",
        checkout: "Checkout",
        login_tab: "Login",
        register_tab: "Register",
        email_label: "Email",
        password_label: "Password",
        name_label: "Full name",
        confirm_label: "Confirm password",
        login_btn: "Login",
        register_btn: "Register",
        profile_btn: "My Profile",
        logout_btn: "Logout",
        profile_title: "My Profile",
        change_avatar: "Change photo",
        age_label: "Age",
        weight_label: "Weight (kg)",
        height_label: "Height (cm)",
        goal_label: "Goal",
        goal_muscle: "Build muscle",
        goal_weight: "Lose weight",
        goal_stamina: "Improve stamina",
        goal_health: "General wellness",
        save_btn: "Save"
    },
    ar: {
        brand: "إم كلوب صفاقس",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_coaches: "المدربون",
        nav_pricing: "الأسعار",
        nav_shop: "المتجر",
        nav_gallery: "المعرض",
        nav_faq: "الأسئلة الشائعة",
        nav_contact: "اتصل بنا",
        hero_title: "لا مزيد من الأعذار.<br>احصل على لياقتك في أي مكان.",
        hero_desc: "سواء كنت في صفاقس أو في أي مكان آخر، يقدم لك إم كلوب تدريبًا شخصيًا لتحقيق أهدافك أينما كنت.",
        hero_btn: "ابدأ الآن",
        health_title: "ضع صحتك<br>في المقام الأول",
        health_desc: "اجعل صحتك أولوية مع تدريب مخصص. حسّن لياقتك أو اصنع جسم أحلامك من خلال جلسات إرشادية تناسبك، متى شئت، أينما شئت.",
        health_btn: "ابدأ",
        card1_title: "بناء العضلات",
        card1_desc: "ابدأ في رؤية تحديد العضلات الآن.",
        card2_title: "إنقاص الوزن",
        card2_desc: "تخلص من الدهون وشاهد وزنك ينخفض.",
        card3_title: "تحسين التحمل",
        card3_desc: "ابنِ قدرتك على التحمل وزد نشاطك.",
        classes_title: "الدروس الجماعية",
        coaches_title: "مدربونا",
        pricing_title: "اشتراكاتنا",
        gallery_title: "صالة الألعاب الرياضية في صور",
        testimonials_title: "ماذا يقول أعضاؤنا",
        faq_title: "الأسئلة الشائعة",
        faq1_q: "كيف يمكنني التسجيل؟",
        faq1_a: "يمكنك التسجيل عبر الإنترنت من خلال نموذج الاتصال الخاص بنا أو زيارتنا في الصالة على طريق لافران.",
        faq2_q: "هل هناك التزام؟",
        faq2_a: "اشتراكاتنا بدون التزام. يمكنك الإلغاء في أي وقت مع إشعار لمدة 15 يومًا.",
        faq3_q: "هل تقدمون دروسًا للمبتدئين؟",
        faq3_a: "نعم، جميع دروسنا مناسبة للمبتدئين. مدربونا سيرشدونك خطوة بخطوة.",
        hours_title: "ساعات العمل",
        map_title: "اعثر علينا",
        address_full: "طريق لافران، صفاقس، تونس",
        open_maps: "عرض جميع التقييمات ←",
        mon_fri: "الإثنين - الجمعة",
        sat_sun: "السبت - الأحد",
        holidays: "العطل الرسمية",
        plan_basic: "أساسي",
        plan_premium: "بريميوم",
        plan_annual: "سنوي",
        choose_btn: "اختر",
        training_title: "جلسات تدريب شخصي.",
        training_desc: "أينما تريد.",
        news_title: "اشترك اليوم",
        news_desc: "احصل على عروضنا ونصائح اللياقة البدنية مباشرة في بريدك الوارد.",
        news_btn: "اشترك",
        contact_title: "تواصل معنا",
        address: "طريق لافران، صفاقس، تونس",
        copyright: "جميع الحقوق محفوظة.",
        subscribe_success: "شكراً! تم استلام اشتراكك.",
        subscribe_error: "عذراً! حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        stat_members: "أعضاء نشطون",
        stat_coaches: "مدربون معتمدون",
        stat_classes: "حصص أسبوعية",
        stat_days: "أيام العمل",
        // Removed: popup_title, popup_desc, popup_btn
        imc_title: "احسب مؤشر كتلة الجسم",
        imc_weight: "الوزن (كجم)",
        imc_height: "الطول (سم)",
        imc_btn: "احسب",
        imc_underweight: "نقص الوزن",
        imc_normal: "وزن طبيعي",
        imc_overweight: "زيادة الوزن",
        imc_obesity: "سمنة",
        shop_title: "متجر إم كلوب",
        shop_subtitle: "تجهز بمنتجاتنا الحصرية",
        product1_name: "تي شيرت إم كلوب",
        product1_desc: "قطن عضوي، طباعة الشعار، مقاس رياضي",
        product2_name: "زجاجة معزولة",
        product2_desc: "ستانلس ستيل، 750 مل، أسود/ذهبي",
        product3_name: "عصابة رأس",
        product3_desc: "ألياف دقيقة قابلة للتنفس، ماصة",
        add_to_cart: "أضف إلى السلة",
        cart_empty: "سلة التسوق فارغة",
        cart_total: "المجموع",
        checkout: "إتمام الشراء",
        login_tab: "تسجيل الدخول",
        register_tab: "إنشاء حساب",
        email_label: "البريد الإلكتروني",
        password_label: "كلمة المرور",
        name_label: "الاسم الكامل",
        confirm_label: "تأكيد كلمة المرور",
        login_btn: "تسجيل الدخول",
        register_btn: "إنشاء حساب",
        profile_btn: "ملفي الشخصي",
        logout_btn: "تسجيل الخروج",
        profile_title: "ملفي الشخصي",
        change_avatar: "تغيير الصورة",
        age_label: "العمر",
        weight_label: "الوزن (كجم)",
        height_label: "الطول (سم)",
        goal_label: "الهدف",
        goal_muscle: "بناء العضلات",
        goal_weight: "إنقاص الوزن",
        goal_stamina: "تحسين التحمل",
        goal_health: "العافية العامة",
        save_btn: "حفظ"
    }
};

// ========== GLOBAL VARIABLES ==========
let currentLang = 'fr';        // Current language (fr, en, ar)
let cart = [];                  // Shopping cart array
let currentUser = null;        // Currently logged-in user

// ========== INITIALIZE AOS (SCROLL ANIMATIONS) ==========
AOS.init({ duration: 800, once: true, offset: 100 });

// ========== COUNTER ANIMATION FOR STATS ==========
// Animates numbers when they come into view
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;  // Divide animation into 50 steps
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

// Intersection Observer to trigger counter animation when stats section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
            });
            observer.unobserve(entry.target);  // Only animate once
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stats-section').forEach(section => {
    observer.observe(section);
});

// ========== STICKY HEADER ON SCROLL ==========
// Adds 'scrolled' class to header when page is scrolled past 50px
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

// ========== MOBILE MENU TOGGLE ==========
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Change icon between hamburger and close (X)
        mobileToggle.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
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
// Opens full-screen image viewer when gallery image is clicked
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
// Toggles FAQ answer visibility when question is clicked
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// ========== BMI (IMC) CALCULATOR ==========
function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight')?.value);
    const heightCm = parseFloat(document.getElementById('height')?.value);
    
    // Validation
    if (!weight || !heightCm || isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById('imc-value').textContent = '--';
        document.getElementById('imc-status').textContent = 'Veuillez entrer des valeurs valides';
        return;
    }
    
    const heightM = heightCm / 100;  // Convert cm to meters
    const imc = weight / (heightM * heightM);
    const imcValue = imc.toFixed(1);
    
    document.getElementById('imc-value').textContent = imcValue;
    
    // Determine BMI category based on current language
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
    // Allow Enter key to trigger calculation
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    if (weightInput) weightInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') calculateIMC(); });
    if (heightInput) heightInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') calculateIMC(); });
}

// ========== SHOPPING CART SYSTEM ==========
// Load cart from localStorage on page load
function loadCart() {
    const savedCart = localStorage.getItem('mclub_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartDisplay();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('mclub_cart', JSON.stringify(cart));
}

// Add product to cart
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

// Remove item from cart by index
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
}

// Update cart UI (count, total, items list)
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
                <div class="cart-item-price">${item.price} DT x ${item.quantity}</div>
            </div>
            <button class="remove-item" data-index="${index}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartContainer.appendChild(cartItem);
    });
    
    if (cartCount) cartCount.textContent = itemCount;
    if (cartTotal) cartTotal.textContent = `${total} DT`;
    
    // Attach remove event listeners to new remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
}

// Show temporary notification message
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #4CAF50;
        color: white;
        padding: 12px 24px;
        border-radius: 30px;
        z-index: 3000;
        font-weight: bold;
        animation: fadeInUp 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => { notification.remove(); }, 3000);
}

// Add to cart button event listeners
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.getAttribute('data-product');
        const price = parseInt(btn.getAttribute('data-price'));
        addToCart(productName, price);
    });
});

// Cart sidebar open/close
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

// Checkout button handler
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Votre panier est vide');
            return;
        }
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        showNotification(`Merci ! Votre commande de ${total} DT a été enregistrée. Nous vous contacterons.`);
        cart = [];
        saveCart();
        updateCartDisplay();
        cartSidebar.classList.remove('open');
    });
}

loadCart();

// ========== USER AUTHENTICATION SYSTEM ==========
// Get all registered users from localStorage
function loadUsers() {
    const users = localStorage.getItem('mclub_users');
    return users ? JSON.parse(users) : [];
}

// Save users array to localStorage
function saveUsers(users) {
    localStorage.setItem('mclub_users', JSON.stringify(users));
}

// Save current logged-in user
function saveCurrentUser(user) {
    localStorage.setItem('mclub_current_user', JSON.stringify(user));
    currentUser = user;
}

// Load current user from localStorage on page load
function loadCurrentUser() {
    const user = localStorage.getItem('mclub_current_user');
    if (user) {
        currentUser = JSON.parse(user);
        updateUserUI();
    }
}

// Update UI based on login status (avatar, name display)
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

// Register new user
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

// Login existing user
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

// Logout current user
function logoutUser() {
    localStorage.removeItem('mclub_current_user');
    currentUser = null;
    updateUserUI();
}

// Update user profile information
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
const logoutBtn = document.getElementById('logout-btn');

// Handle user icon click (show dropdown if logged in, else show auth modal)
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

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    if (userDropdown) userDropdown.classList.remove('show');
});

// Profile button click handler
if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        userDropdown.classList.remove('show');
        openProfileModal();
    });
}

// Logout button click handler
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        logoutUser();
        userDropdown.classList.remove('show');
        showNotification('Vous avez été déconnecté');
    });
}

// Auth tab switching (Login/Register)
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        tab.classList.add('active');
        const tabName = tab.getAttribute('data-tab');
        document.getElementById(`${tabName}-form`).classList.add('active');
    });
});

// Login form submission
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

// Registration form submission
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

// Close auth and profile modals
const closeAuth = document.querySelector('.close-auth');
const closeProfile = document.querySelector('.close-profile');
if (closeAuth) {
    closeAuth.addEventListener('click', () => {
        authModal.style.display = 'none';
    });
}
if (closeProfile) {
    closeProfile.addEventListener('click', () => {
        profileModal.style.display = 'none';
    });
}

// Open profile modal and populate with current user data
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

// Profile form submission (save changes)
const profileForm = document.getElementById('profile-form');
if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
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

// Avatar upload functionality
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

// Load current user on page load
loadCurrentUser();

// ========== NEWSLETTER FORM (Main footer form) ==========
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
// Update all text on page when language changes
function updateLanguage(lang) {
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            // Handle HTML content for titles that contain <br> tags
            if (element.innerHTML && element.innerHTML.includes('<br>') && (key === 'hero_title' || key === 'health_title')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });
    
    // Set RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.style.textAlign = 'right';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.style.textAlign = 'left';
    }
    
    // Update active language button styling
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Language button click handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.getAttribute('data-lang');
        updateLanguage(currentLang);
    });
});

// ========== SMOOTH SCROLLING FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu if open
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
// Highlights current section in navigation while scrolling
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

// ========== INITIALIZE DEFAULT LANGUAGE ==========
updateLanguage('fr');