let currentIndex = 0;

// Funktion für die Karussell-Animation
function slideCarousel() {
    const carousel = document.querySelector('.dachdecker__carousel');
    const blocks = document.querySelectorAll('.dachdecker__block');

    if (!carousel || blocks.length === 0) return;

    const firstBlock = blocks[0];
    carousel.appendChild(firstBlock);

    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';

    setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = 'translateX(-20%)';
    }, 100);
}

setInterval(slideCarousel, 2000);



window.addEventListener('scroll', revealBlocks);
revealBlocks();

function showSection(sectionId) {
    document.querySelectorAll('.dachdecker__section').forEach(section => {
        section.style.display = 'none';
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Menü schließen
    const navList = document.querySelector('.dachdecker__nav-list');
    const hamburger = document.querySelector('.dachdecker__hamburger');
    navList.classList.remove('active');
    hamburger.classList.remove('active');
}

// Hamburger-Menü toggeln
function toggleMenu() {
    const navList = document.querySelector('.dachdecker__nav-list');
    const hamburger = document.querySelector('.dachdecker__hamburger');
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
}

document.querySelectorAll('.dachdecker__nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = item.getAttribute('href').substring(1);
    });
});
