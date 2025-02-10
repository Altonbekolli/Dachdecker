// Blöcke beim Scrollen einblenden
function revealBlocks() {
    const blocks = document.querySelectorAll('.dachdecker__block');
    const revealPoint = 250;

    blocks.forEach(block => {
        const blockTop = block.getBoundingClientRect().top;
        if (blockTop < window.innerHeight - revealPoint) {
            block.classList.add('dachdecker__block--visible');
        }
    });
}

// Event Listener für das Scrollen
window.addEventListener('scroll', revealBlocks);

revealBlocks();

//Anzeigen der verschiedenen Sektionen
function showSection(sectionId) {
    // Alle anderen Sektionen verstecken
    document.querySelectorAll('.dachdecker__section').forEach(section => {
        section.style.display = 'none';
    });

    // Die ausgewählte Sektion anzeigen
    const section = document.getElementById(sectionId);
    section.style.display = 'block';

    section.scrollIntoView({ behavior: 'smooth' });
}

// Hamburger-Menü
function toggleMenu() {
    const navList = document.querySelector('.dachdecker__nav-list');
    const hamburger = document.querySelector('.dachdecker__hamburger');
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
}
