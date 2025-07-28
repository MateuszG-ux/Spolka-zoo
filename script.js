// === Zmiana wyglądu navbaru podczas scrollowania ===
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
let currentIndex = 0;

function animateSlogan() {
    sloganElement.classList.remove('slide-in');
    sloganElement.classList.add('slide-out');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % slogans.length;
        sloganElement.textContent = slogans[currentIndex];
        sloganElement.classList.remove('slide-out');
        sloganElement.classList.add('slide-in');
    }, 800);
}

window.addEventListener('load', () => {
    sloganElement.classList.add('slide-in');
});

setInterval(animateSlogan, 10000);

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});