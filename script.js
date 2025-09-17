// Restaurant Menu Data
const menuData = [
    {
        id: '1',
        name: 'Truffle Pasta Delight',
        description: 'Handmade pasta with black truffle shavings, creamy parmesan sauce, and fresh herbs',
        price: 32,
        image: 'src/assets/truffle-pasta.jpg',
        category: 'main',
        isVeg: true,
        allergens: ['Gluten', 'Dairy'],
        rating: 4.8,
        preparationTime: '15-20 min'
    },
    {
        id: '2',
        name: 'Grilled Atlantic Salmon',
        description: 'Fresh salmon fillet with quinoa pilaf, roasted vegetables, and lemon herb sauce',
        price: 28,
        image: 'src/assets/grilled-salmon.jpg',
        category: 'main',
        isVeg: false,
        allergens: ['Fish'],
        rating: 4.9,
        preparationTime: '20-25 min'
    },
    {
        id: '3',
        name: 'Garden Buddha Bowl',
        description: 'Colorful mix of fresh vegetables, quinoa, avocado, and tahini dressing',
        price: 18,
        image: 'src/assets/buddha-bowl.jpg',
        category: 'main',
        isVeg: true,
        allergens: ['Sesame'],
        rating: 4.7,
        preparationTime: '10-15 min'
    },
    {
        id: '4',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, vanilla ice cream, and fresh berries',
        price: 12,
        image: 'src/assets/chocolate-lava-cake.jpg',
        category: 'dessert',
        isVeg: true,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        rating: 4.9,
        preparationTime: '10-12 min'
    },
    {
        id: '5',
        name: 'Mediterranean Appetizer Platter',
        description: 'Hummus, olives, feta cheese, dolmas, and warm pita bread',
        price: 16,
        image: 'https://images.unsplash.com/photo-1544681280-af7cc6d6beea?w=400',
        category: 'appetizer',
        isVeg: true,
        allergens: ['Gluten', 'Dairy'],
        rating: 4.6,
        preparationTime: '5-8 min'
    },
    {
        id: '6',
        name: 'Craft Beer Selection',
        description: 'Choose from our rotating selection of local craft beers',
        price: 8,
        image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400',
        category: 'beverage',
        isVeg: true,
        allergens: ['Gluten'],
        rating: 4.5,
        preparationTime: '2-3 min'
    }
];

// Gallery Images
const galleryImages = [
    {
        src: 'src/assets/restaurant-ambiance-1.jpg',
        alt: 'Elegant dining room with warm ambient lighting'
    },
    {
        src: 'src/assets/restaurant-ambiance-2.jpg',
        alt: 'Cozy corner seating with intimate atmosphere'
    },
    {
        src: 'src/assets/restaurant-ambiance-3.jpg',
        alt: 'Sophisticated bar area with golden lighting'
    },
    {
        src: 'src/assets/restaurant-ambiance-4.jpg',
        alt: 'Beautiful outdoor terrace dining'
    }
];

// Special Offers
const specialOffers = [
    {
        id: 'offer1',
        title: 'Happy Hour Special',
        description: '50% off all beverages between 4-6 PM',
        badge: '50% OFF',
        validUntil: '6:00 PM Today',
        icon: 'wine'
    },
    {
        id: 'offer2',
        title: 'Couple\'s Combo',
        description: 'Two main courses + dessert + wine for $65',
        badge: 'COMBO DEAL',
        validUntil: 'Limited Time',
        icon: 'heart'
    },
    {
        id: 'offer3',
        title: 'Chef\'s Special',
        description: 'Try our new seasonal tasting menu',
        badge: 'NEW',
        validUntil: 'This Week',
        icon: 'chef-hat'
    }
];

// Translations
const translations = {
    en: {
        'restaurant-name': 'Elegante',
        'tagline': 'Fine Dining Experience',
        'scan-browse-order': 'Scan • Browse • Order',
        'special-offers': 'Today\'s Special Offers',
        'all': 'All',
        'vegetarian': 'Vegetarian',
        'non-vegetarian': 'Non-Vegetarian',
        'favorites': 'Favorites',
        'appetizers': 'Appetizers',
        'main-courses': 'Main Courses',
        'desserts': 'Desserts',
        'beverages': 'Beverages',
        'our-menu': 'Our Menu',
        'menu-description': 'Discover our carefully crafted dishes made with the finest ingredients',
        'search-dishes': 'Search dishes...',
        'no-items-found': 'No items found matching your criteria.',
        'your-order': 'Your Order',
        'cart-empty': 'Your cart is empty',
        'cart-empty-desc': 'Add some delicious items to get started!',
        'subtotal': 'Subtotal:',
        'tax': 'Tax (10%):',
        'total': 'Total:',
        'place-order': 'Place Order',
        'clear-cart': 'Clear Cart',
        'view-cart': 'View Cart',
        'home': 'Home',
        'menu': 'Menu',
        'cart': 'Cart',
        'feedback': 'Feedback',
        'table': 'Table',
        'order-status': 'Order Status',
        'order-received': 'Order Received',
        'order-confirmed': 'Your order has been confirmed',
        'preparing': 'Preparing',
        'chef-cooking': 'Our chef is preparing your meal',
        'ready': 'Ready to Serve',
        'meal-ready': 'Your meal will be served shortly',
        'estimated-time': 'Estimated time:',
        'rate-experience': 'Rate your experience:',
        'feedback-placeholder': 'Tell us about your experience...',
        'submit-feedback': 'Submit Feedback'
    },
    es: {
        'restaurant-name': 'Elegante',
        'tagline': 'Experiencia de Alta Cocina',
        'scan-browse-order': 'Escanear • Navegar • Ordenar',
        'special-offers': 'Ofertas Especiales de Hoy',
        'all': 'Todo',
        'vegetarian': 'Vegetariano',
        'non-vegetarian': 'No Vegetariano',
        'favorites': 'Favoritos',
        'appetizers': 'Aperitivos',
        'main-courses': 'Platos Principales',
        'desserts': 'Postres',
        'beverages': 'Bebidas',
        'our-menu': 'Nuestro Menú',
        'menu-description': 'Descubre nuestros platos cuidadosamente elaborados con los mejores ingredientes',
        'search-dishes': 'Buscar platos...',
        'no-items-found': 'No se encontraron elementos que coincidan con sus criterios.',
        'your-order': 'Su Pedido',
        'cart-empty': 'Su carrito está vacío',
        'cart-empty-desc': '¡Agregue algunos elementos deliciosos para comenzar!',
        'subtotal': 'Subtotal:',
        'tax': 'Impuesto (10%):',
        'total': 'Total:',
        'place-order': 'Realizar Pedido',
        'clear-cart': 'Limpiar Carrito',
        'view-cart': 'Ver Carrito',
        'home': 'Inicio',
        'menu': 'Menú',
        'cart': 'Carrito',
        'feedback': 'Comentarios',
        'table': 'Mesa'
    },
    fr: {
        'restaurant-name': 'Elegante',
        'tagline': 'Expérience Gastronomique',
        'scan-browse-order': 'Scanner • Parcourir • Commander',
        'special-offers': 'Offres Spéciales d\'Aujourd\'hui',
        'all': 'Tout',
        'vegetarian': 'Végétarien',
        'non-vegetarian': 'Non Végétarien',
        'favorites': 'Favoris',
        'appetizers': 'Entrées',
        'main-courses': 'Plats Principaux',
        'desserts': 'Desserts',
        'beverages': 'Boissons',
        'our-menu': 'Notre Menu',
        'menu-description': 'Découvrez nos plats soigneusement élaborés avec les meilleurs ingrédients',
        'search-dishes': 'Rechercher des plats...',
        'no-items-found': 'Aucun élément trouvé correspondant à vos critères.',
        'your-order': 'Votre Commande',
        'cart-empty': 'Votre panier est vide',
        'cart-empty-desc': 'Ajoutez quelques délicieux articles pour commencer!',
        'subtotal': 'Sous-total:',
        'tax': 'Taxe (10%):',
        'total': 'Total:',
        'place-order': 'Passer Commande',
        'clear-cart': 'Vider le Panier',
        'view-cart': 'Voir le Panier',
        'home': 'Accueil',
        'menu': 'Menu',
        'cart': 'Panier',
        'feedback': 'Commentaires',
        'table': 'Table'
    }
};

// Global State
let currentLanguage = 'en';
let currentTheme = 'light';
let currentSlide = 0;
let currentFilter = 'all';
let currentCategory = 'all';
let searchQuery = '';
let cart = [];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let selectedTable = null;
let orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
let currentRating = 0;

// DOM Elements
let galleryContainer, menuGrid, cartItems, cartBadge, cartTotal, cartSidebar;
let mobileCartBar, mobileCartItems, mobileCartTotal, floatingCart;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeGallery();
    initializeMenu();
    initializeOffers();
    initializeEventListeners();
    initializeLucideIcons();
    updateLanguage();
    checkTableSelection();
    updateCartDisplay();
    
    // Auto-start gallery slideshow
    setInterval(nextSlide, 5000);
});

function initializeElements() {
    galleryContainer = document.querySelector('.gallery-images');
    menuGrid = document.getElementById('menuGrid');
    cartItems = document.getElementById('cartItems');
    cartBadge = document.getElementById('cartBadge');
    cartTotal = document.getElementById('cartTotal');
    cartSidebar = document.getElementById('cartSidebar');
    mobileCartBar = document.getElementById('mobileCartBar');
    mobileCartItems = document.getElementById('mobileCartItems');
    mobileCartTotal = document.getElementById('mobileCartTotal');
    floatingCart = document.getElementById('floatingCart');
}

function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function initializeGallery() {
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    const dotsContainer = document.querySelector('.gallery-dots');
    dotsContainer.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        // Create image element
        const imageDiv = document.createElement('div');
        imageDiv.className = `gallery-image ${index === 0 ? 'active' : ''}`;
        imageDiv.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        galleryContainer.appendChild(imageDiv);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function initializeOffers() {
    const offersGrid = document.getElementById('offersGrid');
    if (!offersGrid) return;
    
    offersGrid.innerHTML = specialOffers.map(offer => `
        <div class="offer-card">
            <div class="offer-badge">${offer.badge}</div>
            <i data-lucide="${offer.icon}" style="font-size: 2rem; margin-bottom: 1rem; color: hsl(var(--primary));"></i>
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
            <small>Valid until: ${offer.validUntil}</small>
        </div>
    `).join('');
    
    initializeLucideIcons();
}

function initializeMenu() {
    if (!menuGrid) return;
    renderMenuItems();
}

function initializeEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterMenu();
        });
    }
    
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            currentFilter = e.target.dataset.filter;
            updateActiveTab('.filter-tab', e.target);
            filterMenu();
        });
    });
    
    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.category;
            updateActiveTab('.category-tab', e.target);
            filterMenu();
        });
    });
    
    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            updateActiveTab('.nav-item', e.target.closest('.nav-item'));
        });
    });
    
    // Star rating
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', (e) => {
            currentRating = parseInt(e.target.dataset.rating);
            updateStarRating();
        });
        
        star.addEventListener('mouseover', (e) => {
            const rating = parseInt(e.target.dataset.rating);
            highlightStars(rating);
        });
    });
    
    document.getElementById('starRating')?.addEventListener('mouseleave', () => {
        highlightStars(currentRating);
    });
}

function updateActiveTab(selector, activeElement) {
    document.querySelectorAll(selector).forEach(tab => tab.classList.remove('active'));
    activeElement.classList.add('active');
}

function renderMenuItems() {
    const filteredItems = getFilteredMenuItems();
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '';
        document.getElementById('noResults').style.display = 'block';
        return;
    }
    
    document.getElementById('noResults').style.display = 'none';
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-category="${item.category}" data-veg="${item.isVeg}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="item-badges">
                    <span class="item-badge ${item.isVeg ? 'badge-veg' : 'badge-non-veg'}">
                        ${item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                    ${getCartQuantity(item.id) > 0 ? 
                        `<span class="item-badge badge-cart">${getCartQuantity(item.id)} in cart</span>` : 
                        ''
                    }
                </div>
                <button class="favorite-btn ${favorites.includes(item.id) ? 'active' : ''}" 
                        onclick="toggleFavorite('${item.id}')">
                    <i data-lucide="heart"></i>
                </button>
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                
                ${item.allergens && item.allergens.length > 0 ? `
                    <div class="allergens">
                        <div class="allergens-label">Contains:</div>
                        <div class="allergen-tags">
                            ${item.allergens.map(allergen => 
                                `<span class="allergen-tag">${allergen}</span>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="menu-item-footer">
                    <span class="menu-item-price">$${item.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                        <i data-lucide="plus"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    initializeLucideIcons();
}

function getFilteredMenuItems() {
    return menuData.filter(item => {
        // Search filter
        const matchesSearch = !searchQuery || 
            item.name.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery);
        
        // Category filter
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        
        // Dietary filter
        let matchesDietary = true;
        if (currentFilter === 'veg') matchesDietary = item.isVeg;
        else if (currentFilter === 'non-veg') matchesDietary = !item.isVeg;
        else if (currentFilter === 'favorites') matchesDietary = favorites.includes(item.id);
        
        return matchesSearch && matchesCategory && matchesDietary;
    });
}

function filterMenu() {
    renderMenuItems();
}

// Gallery Functions
function nextSlide() {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    updateGallery();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
}

function goToSlide(index) {
    currentSlide = index;
    updateGallery();
}

function updateGallery() {
    document.querySelectorAll('.gallery-image').forEach((img, index) => {
        img.classList.toggle('active', index === currentSlide);
    });
    
    document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Cart Functions
function addToCart(itemId) {
    const item = menuData.find(item => item.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCartDisplay();
    showToast('Added to cart', `${item.name} has been added to your cart.`, 'success');
    renderMenuItems(); // Re-render to update cart badges
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        updateCartDisplay();
        renderCartItems();
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    renderCartItems();
    renderMenuItems(); // Re-render to update cart badges
    showToast('Removed from cart', 'Item has been removed from your cart.', 'success');
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    renderCartItems();
    renderMenuItems();
    showToast('Cart cleared', 'All items have been removed from your cart.', 'success');
}

function getCartQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    return item ? item.quantity : 0;
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = totalPrice * 0.1;
    const finalTotal = totalPrice + tax;
    
    // Update badges and totals
    cartBadge.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    if (mobileCartItems) mobileCartItems.textContent = `${totalItems} items`;
    if (mobileCartTotal) mobileCartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    // Update order summary
    document.getElementById('subtotal').textContent = `$${totalPrice.toFixed(2)}`;
    document.getElementById('taxAmount').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('finalTotal').textContent = `$${finalTotal.toFixed(2)}`;
    
    // Update place order button
    const placeOrderBtn = document.querySelector('[onclick="checkout()"]');
    if (placeOrderBtn) {
        placeOrderBtn.textContent = `Place Order • $${finalTotal.toFixed(2)}`;
    }
    
    // Show/hide cart elements
    const hasItems = totalItems > 0;
    document.getElementById('cartEmpty').style.display = hasItems ? 'none' : 'block';
    document.getElementById('cartFooter').style.display = hasItems ? 'block' : 'none';
    
    // Show mobile cart bar on small screens
    if (window.innerWidth < 768 && hasItems) {
        mobileCartBar.style.display = 'flex';
    } else {
        mobileCartBar.style.display = 'none';
    }
    
    renderCartItems();
}

function renderCartItems() {
    if (!cartItems) return;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">
                            <i data-lucide="minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
                            <i data-lucide="plus"></i>
                        </button>
                    </div>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.id}')">
                <i data-lucide="trash-2"></i>
            </button>
        </div>
    `).join('');
    
    initializeLucideIcons();
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) return;
    
    // Save order to history
    const order = {
        id: Date.now().toString(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        tax: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.1,
        table: selectedTable,
        timestamp: new Date().toISOString(),
        status: 'preparing'
    };
    
    orderHistory.unshift(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    
    // Clear cart
    clearCart();
    
    // Close cart
    toggleCart();
    
    // Show order tracking
    showOrderTracking();
    
    showToast('Order Placed! 🎉', 'Your order has been sent to the kitchen.', 'success');
}

// Favorites Functions
function toggleFavorite(itemId) {
    const index = favorites.indexOf(itemId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Removed from favorites', 'Item removed from your favorites.', 'success');
    } else {
        favorites.push(itemId);
        showToast('Added to favorites', 'Item added to your favorites.', 'success');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderMenuItems();
}

// Table Selection Functions
function openTableModal() {
    const modal = document.getElementById('tableModal');
    const tableGrid = document.querySelector('.table-grid');
    
    // Generate table options
    tableGrid.innerHTML = '';
    for (let i = 1; i <= 20; i++) {
        const tableOption = document.createElement('div');
        tableOption.className = `table-option ${selectedTable === i ? 'selected' : ''}`;
        tableOption.textContent = i;
        tableOption.onclick = () => selectTable(i);
        tableGrid.appendChild(tableOption);
    }
    
    modal.classList.add('open');
}

function closeTableModal() {
    document.getElementById('tableModal').classList.remove('open');
}

function selectTable(tableNumber) {
    selectedTable = tableNumber;
    document.querySelectorAll('.table-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

function confirmTable() {
    if (selectedTable) {
        document.getElementById('selectedTable').textContent = selectedTable;
        document.getElementById('tableInfo').style.display = 'block';
        localStorage.setItem('selectedTable', selectedTable);
        closeTableModal();
        showToast('Table Selected', `Table ${selectedTable} has been selected.`, 'success');
    }
}

function checkTableSelection() {
    const savedTable = localStorage.getItem('selectedTable');
    if (!savedTable) {
        setTimeout(openTableModal, 2000); // Show table selection after 2 seconds
    } else {
        selectedTable = parseInt(savedTable);
        document.getElementById('selectedTable').textContent = selectedTable;
        document.getElementById('tableInfo').style.display = 'block';
    }
}

// Order Tracking Functions
function showOrderTracking() {
    document.getElementById('orderModal').classList.add('open');
    
    // Simulate order progress
    setTimeout(() => {
        document.querySelector('.tracking-step.active').classList.remove('active');
        document.querySelector('.tracking-step.active').classList.add('completed');
        document.querySelectorAll('.tracking-step')[2].classList.add('active');
    }, 10000); // After 10 seconds, move to "Ready to Serve"
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('open');
}

// Feedback Functions
function openFeedbackModal() {
    document.getElementById('feedbackModal').classList.add('open');
}

function closeFeedbackModal() {
    document.getElementById('feedbackModal').classList.remove('open');
    currentRating = 0;
    updateStarRating();
    document.getElementById('feedbackText').value = '';
}

function updateStarRating() {
    highlightStars(currentRating);
}

function highlightStars(rating) {
    document.querySelectorAll('.star').forEach((star, index) => {
        star.classList.toggle('active', index < rating);
    });
}

function submitFeedback() {
    const feedbackText = document.getElementById('feedbackText').value;
    
    if (currentRating === 0) {
        showToast('Rating Required', 'Please select a star rating.', 'error');
        return;
    }
    
    // Save feedback (in a real app, this would be sent to a server)
    const feedback = {
        rating: currentRating,
        text: feedbackText,
        timestamp: new Date().toISOString(),
        table: selectedTable
    };
    
    console.log('Feedback submitted:', feedback);
    
    closeFeedbackModal();
    showToast('Thank You!', 'Your feedback has been submitted.', 'success');
}

// Language Functions
function changeLanguage(lang) {
    currentLanguage = lang;
    updateLanguage();
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    localStorage.setItem('selectedLanguage', lang);
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.dataset.translatePlaceholder;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Theme Functions
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.setAttribute('data-lucide', currentTheme === 'light' ? 'moon' : 'sun');
    initializeLucideIcons();
    
    localStorage.setItem('selectedTheme', currentTheme);
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showToast(title, description, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Initialize saved preferences
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        document.querySelector(`[onclick="changeLanguage('${savedLanguage}')"]`)?.classList.add('active');
    }
    
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.setAttribute('data-lucide', currentTheme === 'light' ? 'moon' : 'sun');
    }
});

// Handle window resize for mobile cart bar
window.addEventListener('resize', function() {
    updateCartDisplay();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'C' to toggle cart
    if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            toggleCart();
        }
    }
    
    // Press 'Escape' to close modals
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.open').forEach(modal => {
            modal.classList.remove('open');
        });
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    }
});

// Handle image loading errors
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400';
    }
}, true);