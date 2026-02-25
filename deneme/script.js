document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a, #mobile-menu a');

    // 1. Navbar Kaydırma ve Aktif Link Takibi (ScrollSpy)
    window.addEventListener('scroll', () => {
        // Navbar küçülme efekti
        if (window.scrollY > 50) {
            nav.classList.add('bg-black/95', 'py-4', 'backdrop-blur-md');
            nav.classList.remove('py-6');
        } else {
            nav.classList.remove('bg-black/95', 'py-4', 'backdrop-blur-md');
            nav.classList.add('py-6');
        }

        // Aktif link takibi
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-link');
            }
        });
    });

    // 2. Mobil Menü Aç/Kapat
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Mobil menüden bir linke tıklanınca menüyü kapat
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // 3. Scroll Reveal (Kaydırdıkça Gelen İçerik)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 4. Proje Filtreleme
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Buton stilini değiştir
            filterBtns.forEach(b => b.classList.remove('active-filter', 'border-b-2', 'border-accent'));
            filterBtns.forEach(b => b.classList.add('text-black/40'));
            btn.classList.add('active-filter', 'border-b-2', 'border-accent');
            btn.classList.remove('text-black/40');

            const filterValue = btn.getAttribute('data-filter');

            projects.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
