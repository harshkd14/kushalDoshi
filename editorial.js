/* ====================================
   EDITORIAL PAGE - MAGAZINE & EDITORIAL
   ==================================== */

// EDITORIAL PHOTOGRAPHY DATA
const projects = [
    // PORTRAIT - Editorial fashion and magazine portraits
    { image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", title: "Fashion Editorial", category: "Fashion", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", title: "Beauty Editorial", category: "Beauty", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", title: "Magazine Cover", category: "Cover", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04", title: "Editorial Portrait", category: "Portrait", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df", title: "Runway Fashion", category: "Fashion", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6", title: "Vogue Style", category: "Fashion", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59", title: "High Fashion", category: "Fashion", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", title: "Model Portfolio", category: "Portfolio", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1509631179647-0177331693ae", title: "Fashion Story", category: "Fashion", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f", title: "Editorial Glamour", category: "Glamour", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b", title: "Street Fashion", category: "Street Style", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", title: "Natural Beauty", category: "Beauty", orientation: "portrait" },
    
    // LANDSCAPE - Editorial spreads and lifestyle
    { image: "https://images.unsplash.com/photo-1483985988355-763728e1935b", title: "Fashion Campaign", category: "Campaign", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1558769132-cb1aea9c7e5f", title: "Lifestyle Editorial", category: "Lifestyle", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b", title: "Magazine Spread", category: "Spread", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1445205170230-053b83016050", title: "Editorial Story", category: "Story", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d", title: "Fashion Photography", category: "Fashion", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1467043237213-65f2da53396f", title: "Urban Editorial", category: "Urban", orientation: "landscape" },
    
    // SQUARE - Magazine details and social media
    { image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f", title: "Fashion Details", category: "Details", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f", title: "Accessory Editorial", category: "Accessories", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca", title: "Editorial Makeup", category: "Beauty", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1610020618350-c6f23bcaf3c3", title: "Fashion Flat Lay", category: "Styling", orientation: "square" },
];

// GENERATE GRID CARDS (2-COLUMN LAYOUT)
const grid = document.getElementById('portfolio-grid');

projects.forEach((project, index) => {
    const orientation = project.orientation || 'portrait';
    const card = document.createElement('div');
    card.className = `card ${orientation}`;
    card.style.transitionDelay = `${(index % 4) * 0.1}s`;

    let imageSrc;
    if (project.image) {
        if (project.image.startsWith('http')) {
            imageSrc = project.image;
        } else {
            imageSrc = `images/${project.image}`;
        }
    } else {
        imageSrc = `https://picsum.photos/seed/${index}/800/1200`;
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

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

