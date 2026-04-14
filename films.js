/* ====================================
   FILMS PAGE - VIDEO & FILM PROJECTS
   ==================================== */

// FILM & VIDEO PROJECTS DATA
const projects = [
    // LANDSCAPE - Film/Video shots (Horizontal - cinematic format)
    { image: "https://images.unsplash.com/photo-1485846234645-a62644f84728", title: "Film Production", category: "Production", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26", title: "Cinematic Sunset", category: "Cinematic", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1574267432644-f610f4ac8a19", title: "Camera Equipment", category: "BTS", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1536240478700-b869070f9279", title: "Film Set", category: "Production", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf", title: "Video Editing", category: "Post-Production", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb", title: "Documentary Scene", category: "Documentary", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1571847812-15f73b4e5edc", title: "Music Video", category: "Music Video", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0", title: "Cinematography", category: "Cinematic", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4", title: "Corporate Video", category: "Corporate", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1512070679279-8988d32161be", title: "Short Film", category: "Short Film", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1579558583068-4fda67d90041", title: "Film Crew", category: "Production", orientation: "landscape" },
    { image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", title: "Cinematic Lighting", category: "Cinematic", orientation: "landscape" },
    
    // PORTRAIT - Behind the scenes, portraits
    { image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce", title: "Director Portrait", category: "Portrait", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", title: "Actor Headshot", category: "Portrait", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1517841905240-472988babdf9", title: "Cinematographer", category: "BTS", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", title: "Actress Portrait", category: "Portrait", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", title: "Film Talent", category: "Portrait", orientation: "portrait" },
    { image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce", title: "Character Study", category: "Portrait", orientation: "portrait" },
    
    // SQUARE - Equipment, details
    { image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4", title: "Camera Rig", category: "Equipment", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1579268091949-2c6f9c23d42b", title: "Film Reel", category: "Details", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85", title: "Clapperboard", category: "Equipment", orientation: "square" },
    { image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1", title: "Video Camera", category: "Equipment", orientation: "square" },
];

// GENERATE GRID CARDS (2-COLUMN LAYOUT)
const grid = document.getElementById('portfolio-grid');

projects.forEach((project, index) => {
    const orientation = project.orientation || 'landscape';
    const card = document.createElement('div');
    card.className = `card ${orientation}`;
    card.style.transitionDelay = `${(index % 4) * 0.1}s`;

    // Build image source
    let imageSrc;
    if (project.image) {
        if (project.image.startsWith('http')) {
            imageSrc = project.image;
        } else {
            imageSrc = `images/${project.image}`;
        }
    } else {
        imageSrc = `https://picsum.photos/seed/${index}/1200/800`;
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

