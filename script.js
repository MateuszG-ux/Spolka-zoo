// === NAVBAR scroll shrink + logo ===
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('navbar-logo');

    if (window.scrollY > 100) {
        navbar.classList.add('shrink');
        logo.classList.remove('hidden');
    } else {
        navbar.classList.remove('shrink');
        logo.classList.add('hidden');
    }
});

// === Dynamiczne slogany ===
const slogans = [
    "Padel — ruch, emocje i energia w sercu Zielonej Góry",
    "Gra zespołowa, która łączy pokolenia i pasje",
    "Padel Club Zielona Góra — Twój nowy sposób na aktywność i zabawę",
    "Wskocz w grę, poczuj adrenalinę, dołącz do nas!",
    "Padel Club Zielona Góra — Twój kort, Twoja pasja"
];

const sloganElement = document.getElementById('slogan-text');
let sloganIndex = 0;

function animateSlogan() {
    sloganElement.classList.remove('slide-in');
    sloganElement.classList.add('slide-out');

    setTimeout(() => {
        sloganIndex = (sloganIndex + 1) % slogans.length;
        sloganElement.textContent = slogans[sloganIndex];
        sloganElement.classList.remove('slide-out');
        sloganElement.classList.add('slide-in');
    }, 800);
}

window.addEventListener('load', () => {
    sloganElement.classList.add('slide-in');
    setInterval(animateSlogan, 10000);
});

// === Hamburger menu ===
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Klik w hamburger
    hamburger.addEventListener('click', e => {
        e.stopPropagation();
        navLinks.classList.toggle('open');
        body.classList.toggle('no-scroll');
    });

    // Zamknięcie po kliknięciu poza menu
    document.addEventListener('click', e => {
        if (
            navLinks.classList.contains('open') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            navLinks.classList.remove('open');
            body.classList.remove('no-scroll');
        }
    });

    // Zamknięcie po kliknięciu w link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            body.classList.remove('no-scroll');
        });
    });
});

// === Automatyczny slider galerii na telefonach z animacją fade i przesunięciem ===
window.addEventListener('load', () => {
    const sliderImages = document.querySelectorAll('.gallery-slider img');
    if (!sliderImages.length) return; // jeśli nie ma slidera, nic nie robimy

    let currentIndex = 0;

    // Na start pokazujemy pierwszy slajd
    sliderImages.forEach((img, i) => {
        img.classList.toggle('active', i === 0);
    });

    setInterval(() => {
        sliderImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % sliderImages.length;
        sliderImages[currentIndex].classList.add('active');
    }, 4000); // zmiana co 4 sekundy
});