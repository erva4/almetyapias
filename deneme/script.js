
// 1. Navbar Kaydırma Efekti
const nav = document.getElementById('main-nav');
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-black/95', 'py-4', 'border-b', 'border-white/5', 'backdrop-blur-md');
            nav.classList.remove('py-6');
        } else {
            nav.classList.remove('bg-black/95', 'py-4', 'border-b', 'border-white/5', 'backdrop-blur-md');
            nav.classList.add('py-6');
        }
    });
}
