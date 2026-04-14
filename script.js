/* ====================================
   KUSHAL DOSHI - MEMORY WHEEL
   Portfolio Interactive Script
   ==================================== */

// PROJECT DATA - ORGANIZED BY ORIENTATION FOLDERS
//
// HOW TO ADD YOUR PHOTOS:
// 1. Create folders: images/landscape/, images/portrait/, images/square/
// 2. Add your DSLR photos to the appropriate folder based on orientation
// 3. Replace the filename in the 'image' property below
// 4. The code will automatically look in the correct orientation folder!
//
// Example:
// - Horizontal wedding photo → save as images/landscape/wedding-1.jpg
// - Vertical bride portrait → save as images/portrait/bride-1.jpg
// - Square product shot → save as images/square/product-1.jpg

const projects = [
    // MIXED ORIENTATIONS - Shuffled for visual variety
    { image: "https://images.unsplash.com/photo-1519741497674-611481863552", title: "Wedding Moments", category: "Wedding", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", title: "Professional Portrait", category: "Corporate", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", title: "Mountain Vista", category: "Landscape", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", title: "Headphones Product", category: "Product", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", title: "Fashion Model", category: "Fashion", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211", title: "Sports Action", category: "Sports", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", title: "Beauty Portrait", category: "Portrait", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", title: "Team Meeting", category: "Corporate", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", title: "Gourmet Dish", category: "Food", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", title: "Elegant Woman", category: "Editorial", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30", title: "Event Celebration", category: "Events", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", title: "Modern Man", category: "Lifestyle", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26", title: "Cinematic Sunset", category: "Videography", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", title: "Watch Product", category: "Product", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3", title: "Tall Building", category: "Architecture", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", title: "Travel Adventure", category: "Travel", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce", title: "Studio Portrait", category: "Studio", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352", title: "Coffee Art", category: "Food", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be", title: "Cultural Dance", category: "Documentary", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", title: "Confident Gentleman", category: "Portrait", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622", title: "Concert Lights", category: "Events", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", title: "Sneaker Product", category: "Product", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", title: "Creative Artist", category: "Personal", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1485846234645-a62644f84728", title: "Film Production", category: "BTS", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df", title: "Runway Fashion", category: "Fashion", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", title: "Nature Serenity", category: "Fine Art", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929", title: "Minimal Design", category: "Minimalism", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04", title: "Magazine Cover", category: "Editorial", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", title: "Creative Workspace", category: "Commercial", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126", title: "Urban Street", category: "Urban", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f", title: "Tech Gadget", category: "Product", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1514996937319-344454492b37", title: "City Nightscape", category: "Night", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e", title: "Bride Portrait", category: "Wedding", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3", title: "Festival Vibes", category: "Culture", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", title: "Pizza Slice", category: "Food", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6", title: "Elegant Lady", category: "Fashion", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", title: "Tech Innovation", category: "Tech", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7", title: "Lifestyle Moment", category: "Lifestyle", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f", title: "Sunglasses", category: "Product", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4", title: "Brand Campaign", category: "Advertising", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1477313372947-d68a7d410e9f", title: "Skyscraper View", category: "Architecture", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", title: "Beach Sunset", category: "Landscape", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", title: "Food Plating", category: "Food", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1517841905240-472988babdf9", title: "Professional Woman", category: "Corporate", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39", title: "Marathon Run", category: "Sports", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1502767089025-6572583495f9", title: "Creative Portrait", category: "Studio", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa", title: "Shoe Display", category: "Product", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d", title: "Wedding Reception", category: "Wedding", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce", title: "Urban Explorer", category: "Urban", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", title: "Misty Forest", category: "Nature", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", title: "Breakfast Bowl", category: "Food", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59", title: "Editorial Fashion", category: "Fashion", orientation: "portrait" },
];

// GENERATE GRID CARDS (2-COLUMN LAYOUT)
const grid = document.getElementById('portfolio-grid');

projects.forEach((project, index) => {
    const orientation = project.orientation || 'landscape';
    const card = document.createElement('div');
    card.className = `card ${orientation}`;
    card.style.transitionDelay = `${(index % 4) * 0.1}s`;

    // Generate appropriate image dimensions based on orientation for placeholders
    let imgWidth, imgHeight;
    if (orientation === 'portrait') {
        imgWidth = 800;
        imgHeight = 1200;
    } else if (orientation === 'square') {
        imgWidth = 1000;
        imgHeight = 1000;
    } else { // landscape
        imgWidth = 1200;
        imgHeight = 800;
    }

    // Build image path
    // If project.image is a full URL (starts with http), use it directly
    // If it's a relative path (e.g., "landscape/photo-1.jpg"), prefix with "images/"
    // Otherwise use placeholder with correct orientation
    let imageSrc;
    if (project.image) {
        if (project.image.startsWith('http')) {
            // Direct URL (Unsplash, external link, etc.)
            imageSrc = project.image;
        } else {
            // Local file path - add images/ prefix
            imageSrc = `images/${project.image}`;
        }
    } else {
        // Fallback to placeholder
        imageSrc = `https://picsum.photos/seed/${index}/${imgWidth}/${imgHeight}`;
    }

    card.innerHTML = `
        <img src="${imageSrc}" alt="${project.title}" loading="lazy">
        <div class="overlay">
            <h3>${project.title}</h3>
            <p>— view —</p>
        </div>
    `;

    grid.appendChild(card);
});

// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// OBSERVE ALL CARDS
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// =====================================
// MOBILE HAMBURGER MENU
// =====================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
