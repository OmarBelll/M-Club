// Language translations
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
        nav_nutrition: "Nutrition",
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
        faq4_q: "Proposez-vous des consultations nutrition ?",
        faq4_a: "Oui ! Nos coachs sont formés pour vous donner des conseils nutritionnels de base. Pour un suivi personnalisé, nous pouvons vous orienter vers nos partenaires nutritionnistes.",
        faq5_q: "Puis-je annuler mon abonnement à tout moment ?",
        faq5_a: "Oui, avec un préavis de 15 jours. Aucun frais de résiliation.",
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
        save_btn: "Enregistrer",
        age_error: "Âge doit être entre 12 et 120 ans",
        weight_error: "Poids doit être entre 20 et 300 kg",
        height_error: "Taille doit être entre 50 et 250 cm",
        orders_btn: "Mes commandes",
        orders_title: "Mes commandes",
        no_orders: "Aucune commande pour le moment",
        remember_me: "Se souvenir de moi",
        forgot_password: "Mot de passe oublié ?",
        reset_title: "Réinitialiser le mot de passe",
        reset_desc: "Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
        reset_btn: "Envoyer le lien",
        nutrition_title: "CONSEILS NUTRITION",
        nutrition_subtitle: "80% de vos résultats viennent de l'assiette. Découvrez nos conseils pour une alimentation saine et adaptée à vos objectifs.",
        nutrition_tip1_title: "Mangez des protéines à chaque repas",
        nutrition_tip1_desc: "Les protéines sont essentielles pour la construction musculaire et la satiété. Œufs, poulet, poisson, légumineuses, fromage blanc... variez les sources !",
        nutrition_tip2_title: "Hydratez-vous correctement",
        nutrition_tip2_desc: "Buvez au moins 1.5 à 2L d'eau par jour. L'hydratation est cruciale pour les performances et la récupération musculaire.",
        nutrition_tip3_title: "Priorisez les légumes",
        nutrition_tip3_desc: "Riches en vitamines, minéraux et fibres, les légumes doivent remplir la moitié de votre assiette à chaque repas.",
        nutrition_tip4_title: "Ne sautez pas de repas",
        nutrition_tip4_desc: "3 repas équilibrés par jour + une collation si nécessaire. Sauter des repas ralentit votre métabolisme.",
        nutrition_tip5_title: "Écoutez votre corps",
        nutrition_tip5_desc: "Apprenez à reconnaître la faim et la satiété. Mangez lentement et savourez vos repas sans distraction.",
        nutrition_tip6_title: "Préparez vos repas à l'avance",
        nutrition_tip6_desc: "Le meal prep vous aide à éviter les mauvaises tentations et à rester sur la bonne voie toute la semaine.",
        see_more_coaches: "Voir tous nos coachs"
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
        nav_nutrition: "Nutrition",
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
        faq4_q: "Do you offer nutrition consultations?",
        faq4_a: "Yes! Our coaches are trained to give basic nutritional advice. For personalized follow-up, we can refer you to our nutritionist partners.",
        faq5_q: "Can I cancel my subscription at any time?",
        faq5_a: "Yes, with 15 days notice. No cancellation fees.",
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
        save_btn: "Save",
        age_error: "Age must be between 12 and 120",
        weight_error: "Weight must be between 20 and 300 kg",
        height_error: "Height must be between 50 and 250 cm",
        orders_btn: "My Orders",
        orders_title: "My Orders",
        no_orders: "No orders yet",
        remember_me: "Remember me",
        forgot_password: "Forgot password?",
        reset_title: "Reset Password",
        reset_desc: "Enter your email and we'll send you a link to reset your password.",
        reset_btn: "Send reset link",
        nutrition_title: "NUTRITION TIPS",
        nutrition_subtitle: "80% of your results come from your plate. Discover our tips for healthy eating adapted to your goals.",
        nutrition_tip1_title: "Eat protein at every meal",
        nutrition_tip1_desc: "Proteins are essential for muscle building and satiety. Eggs, chicken, fish, legumes, cottage cheese... vary your sources!",
        nutrition_tip2_title: "Stay hydrated",
        nutrition_tip2_desc: "Drink at least 1.5 to 2L of water per day. Hydration is crucial for performance and muscle recovery.",
        nutrition_tip3_title: "Prioritize vegetables",
        nutrition_tip3_desc: "Rich in vitamins, minerals and fiber, vegetables should fill half your plate at every meal.",
        nutrition_tip4_title: "Don't skip meals",
        nutrition_tip4_desc: "3 balanced meals per day + a snack if needed. Skipping meals slows down your metabolism.",
        nutrition_tip5_title: "Listen to your body",
        nutrition_tip5_desc: "Learn to recognize hunger and fullness. Eat slowly and enjoy your meals without distraction.",
        nutrition_tip6_title: "Prepare your meals in advance",
        nutrition_tip6_desc: "Meal prep helps you avoid bad temptations and stay on track all week.",
        see_more_coaches: "See all our coaches"
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
        nav_nutrition: "تغذية",
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
        faq4_q: "هل تقدمون استشارات تغذية؟",
        faq4_a: "نعم! مدربونا مدربون لتقديم نصائح غذائية أساسية. للمتابعة الشخصية، يمكننا إحالتك إلى شركائنا من أخصائيي التغذية.",
        faq5_q: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
        faq5_a: "نعم، مع إشعار لمدة 15 يومًا. لا توجد رسوم إلغاء.",
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
        save_btn: "حفظ",
        age_error: "العمر يجب أن يكون بين 12 و 120 سنة",
        weight_error: "الوزن يجب أن يكون بين 20 و 300 كجم",
        height_error: "الطول يجب أن يكون بين 50 و 250 سم",
        orders_btn: "طلباتي",
        orders_title: "طلباتي",
        no_orders: "لا توجد طلبات بعد",
        remember_me: "تذكرني",
        forgot_password: "نسيت كلمة المرور؟",
        reset_title: "إعادة تعيين كلمة المرور",
        reset_desc: "أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك.",
        reset_btn: "إرسال رابط إعادة التعيين",
        nutrition_title: "نصائح غذائية",
        nutrition_subtitle: "80% من نتائجك تأتي من طبقك. اكتشف نصائحنا للأكل الصحي المناسب لأهدافك.",
        nutrition_tip1_title: "تناول البروتين في كل وجبة",
        nutrition_tip1_desc: "البروتينات ضرورية لبناء العضلات والشعور بالشبع. البيض والدجاج والسمك والبقوليات والجبن القريش... تنويع المصادر!",
        nutrition_tip2_title: "اشرب كمية كافية من الماء",
        nutrition_tip2_desc: "اشرب ما لا يقل عن 1.5 إلى 2 لتر من الماء يوميًا. الترطيب ضروري للأداء واستشفاء العضلات.",
        nutrition_tip3_title: "أعط الأولوية للخضروات",
        nutrition_tip3_desc: "الغنية بالفيتامينات والمعادن والألياف، يجب أن تملأ الخضروات نصف طبقك في كل وجبة.",
        nutrition_tip4_title: "لا تتخطى الوجبات",
        nutrition_tip4_desc: "3 وجبات متوازنة في اليوم + وجبة خفيفة إذا لزم الأمر. تخطي الوجبات يبطئ عملية التمثيل الغذائي.",
        nutrition_tip5_title: "استمع إلى جسدك",
        nutrition_tip5_desc: "تعلم التعرف على الجوع والشبع. تناول الطعام ببطء واستمتع بوجباتك دون تشتيت.",
        nutrition_tip6_title: "حضر وجباتك مسبقًا",
        nutrition_tip6_desc: "يساعدك تحضير الوجبات مسبقًا على تجنب الإغراءات والبقاء على المسار الصحيح طوال الأسبوع.",
        see_more_coaches: "عرض جميع المدربين"
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
    orders.unshift(order);
    saveOrders();
}

// ========== CHECKOUT WITH ORDER SAVING ==========
const checkoutBtn = document.getElementById('checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', async () => {
        if (cart.length === 0) {
            showNotification('Votre panier est vide', true);
            return;
        }
        
        const originalText = checkoutBtn.innerHTML;
        checkoutBtn.innerHTML = '<span class="loading-spinner"></span> Traitement...';
        checkoutBtn.disabled = true;
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const order = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: [...cart],
            total: total,
            userEmail: currentUser ? currentUser.email : 'guest@example.com',
            userName: currentUser ? currentUser.name : 'Invité'
        };
        
        addOrder(order);
        
        cart = [];
        saveCart();
        updateCartDisplay();
        cartSidebar.classList.remove('open');
        
        checkoutBtn.innerHTML = originalText;
        checkoutBtn.disabled = false;
        
        showNotification(`Merci ! Votre commande de ${total} DT a été enregistrée.`);
    });
}

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
            <div class="order-item">
                <div class="order-header">
                    <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
                    <span class="order-total">${order.total} DT</span>
                </div>
                <div class="order-items-preview">
                    ${order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}
                </div>
            </div>
        `).join('');
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

// ========== REMEMBER ME FUNCTIONALITY ==========
function saveRememberedUser(email, password) {
    const rememberCheckbox = document.getElementById('remember-me');
    if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem('remembered_email', email);
        localStorage.setItem('remembered_password', btoa(password));
        localStorage.setItem('remember_me', 'true');
    } else {
        localStorage.removeItem('remembered_email');
        localStorage.removeItem('remembered_password');
        localStorage.setItem('remember_me', 'false');
    }
}

function loadRememberedUser() {
    const rememberMe = localStorage.getItem('remember_me');
    if (rememberMe === 'true') {
        const email = localStorage.getItem('remembered_email');
        const encodedPassword = localStorage.getItem('remembered_password');
        if (email && encodedPassword) {
            const password = atob(encodedPassword);
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const rememberCheckbox = document.getElementById('remember-me');
            if (emailInput) emailInput.value = email;
            if (passwordInput) passwordInput.value = password;
            if (rememberCheckbox) rememberCheckbox.checked = true;
            
            setTimeout(() => {
                const result = loginUser(email, password);
                if (result.success && authModal) {
                    authModal.style.display = 'none';
                    showNotification('Connexion automatique réussie ! Bienvenue ' + currentUser.name);
                }
            }, 100);
        }
    }
}

// ========== FORGOT PASSWORD FUNCTIONALITY ==========
const forgotPasswordModal = document.getElementById('forgot-password-modal');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const closeForgot = document.querySelector('.close-forgot');
const forgotPasswordForm = document.getElementById('forgot-password-form');
const resetMessage = document.getElementById('reset-message');

if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (authModal) authModal.style.display = 'none';
        if (forgotPasswordModal) forgotPasswordModal.style.display = 'flex';
    });
}

if (closeForgot) {
    closeForgot.addEventListener('click', () => {
        if (forgotPasswordModal) forgotPasswordModal.style.display = 'none';
    });
}

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('reset-email').value;
        const users = loadUsers();
        const user = users.find(u => u.email === email);
        
        if (user) {
            const resetToken = Math.random().toString(36).substring(2, 15);
            
            if (resetMessage) {
                resetMessage.innerHTML = `Un lien de réinitialisation a été envoyé à ${email}.<br><small>(Demo: <a href="#" onclick="simulateReset('${email}')">Cliquez ici pour simuler</a>)</small>`;
                resetMessage.className = 'reset-message success';
            }
            
            localStorage.setItem('reset_token_' + email, resetToken);
            document.getElementById('reset-email').value = '';
        } else {
            if (resetMessage) {
                resetMessage.innerHTML = 'Aucun compte trouvé avec cet email.';
                resetMessage.className = 'reset-message error';
            }
        }
        
        setTimeout(() => {
            if (resetMessage && resetMessage.innerHTML) {
                setTimeout(() => {
                    resetMessage.innerHTML = '';
                }, 5000);
            }
        }, 5000);
    });
}

window.simulateReset = function(email) {
    const tempPassword = Math.random().toString(36).substring(2, 10);
    const users = loadUsers();
    const userIndex = users.findIndex(u => u.email === email);
    
    if (userIndex !== -1) {
        users[userIndex].password = tempPassword;
        saveUsers(users);
        if (resetMessage) {
            resetMessage.innerHTML = `Un nouveau mot de passe temporaire a été créé: <strong>${tempPassword}</strong><br>Veuillez vous connecter avec ce mot de passe puis changer votre mot de passe dans votre profil.`;
            resetMessage.className = 'reset-message success';
        }
        
        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');
        if (emailInput) emailInput.value = email;
        if (passwordInput) passwordInput.value = tempPassword;
        
        setTimeout(() => {
            if (forgotPasswordModal) forgotPasswordModal.style.display = 'none';
            if (authModal) authModal.style.display = 'flex';
            showNotification('Mot de passe temporaire généré ! Veuillez vous connecter.');
        }, 3000);
    }
};

if (forgotPasswordModal) {
    forgotPasswordModal.addEventListener('click', (e) => {
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });
}

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
        const rememberCheckbox = document.getElementById('remember-me');
        if (rememberCheckbox) {
            saveRememberedUser(email, password);
        }
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

document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        tab.classList.add('active');
        const tabName = tab.getAttribute('data-tab');
        document.getElementById(`${tabName}-form`).classList.add('active');
    });
});

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

loadCurrentUser();
loadCart();
loadOrders();
loadRememberedUser();

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

updateLanguage('fr');

console.log('%c🔐 Note: This demo stores data in localStorage. For production, use a proper backend!', 'color: #f0b90b; font-size: 12px;');
