const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-sm', 'border-b', 'border-[#113824]/10');
        header.style.background = 'rgba(246, 248, 245, 0.92)';
    } else {
        header.classList.remove('shadow-sm', 'border-b', 'border-[#113824]/10');
        header.style.background = 'transparent';
    }
});

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