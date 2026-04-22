// Add background to the header nav after scrolling down
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-md', 'border-b', 'border-zinc-800/50');
        header.style.background = 'rgba(9, 9, 11, 0.85)'; // zinc-950
    } else {
        header.classList.remove('shadow-md', 'border-b', 'border-zinc-800/50');
        header.style.background = 'transparent';
       }
});

// Ensure smooth scrolling fallback in older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
                
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});