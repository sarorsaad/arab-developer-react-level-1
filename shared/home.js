// Add hover effects and active states to lesson cards
const lessonCards = document.querySelectorAll('.lesson-card');

lessonCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Remove active class from other cards
        lessonCards.forEach(c => c.classList.remove('active'));
        // Add active class to hovered card
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });

    // Add click animation
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 100);
    });
});

// Add scroll reveal animation
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.lesson-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Add search functionality
const searchInput = document.getElementById('search-lessons');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.lesson-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
