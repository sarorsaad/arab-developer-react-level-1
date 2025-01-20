// Handle navigation and section visibility
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

// Show first section by default
if (sections.length > 0) {
    sections[0].classList.add('active');
}
if (navLinks.length > 0) {
    navLinks[0].classList.add('active');
}

function setActiveSection() {
    const scrollPosition = window.scrollY + 100; // Add offset for better detection

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            // Remove active class from all sections and links
            sections.forEach(s => s.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to current section and link
            section.classList.add('active');
            if (navLinks[index]) {
                navLinks[index].classList.add('active');
            }
        }
    });
}

// Initialize sections
window.addEventListener('load', () => {
    setActiveSection();
    // Force first section to be visible
    if (sections.length > 0) {
        sections[0].style.opacity = '1';
    }
});

// Update on scroll with debounce
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(setActiveSection, 10);
});

// Smooth scroll to sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Remove active class from all sections and links
            sections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked section and link
            targetSection.classList.add('active');
            link.classList.add('active');
            
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
