// Loader - Fixed missing assignment operator [cite: 362]
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Letter-by-letter animation - Fixed missing assignment and syntax [cite: 365-373]
const text = document.getElementById('heroText');
if (text) {
    const letters = text.textContent.split('');
    text.textContent = '';
    letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        // Fixed template literal and delay syntax [cite: 372]
        span.style.animationDelay = `${i * 0.05}s`;
        text.appendChild(span);
    });
}

// Scroll reveal - Fixed logic and missing subtraction [cite: 375-382]
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    reveals.forEach(el => {
        // Added the missing minus operator for detection [cite: 378]
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Mouse parallax hero - Fixed math operators and template literals [cite: 384-393]
const hero = document.getElementById('hero');
if (hero) {
    hero.addEventListener('mousemove', e => {
        // Fixed calculation syntax [cite: 388-389]
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        // Fixed missing backtick and closing quote [cite: 390]
        hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    hero.addEventListener('mouseleave', () => {
        hero.style.transform = 'rotateY(0) rotateX(0)';
    });
}
