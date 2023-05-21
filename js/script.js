const navEl = document.querySelector('.avbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 156) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 156) {
        navEl.classList.remove('navbar-scrolled');
    }
});