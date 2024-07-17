document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const productHeaderWrapper = document.querySelector('.product-header-wrapper');

    if (menuToggle && productHeaderWrapper) {
        menuToggle.addEventListener('click', function() {
            productHeaderWrapper.classList.toggle('show');
        });
    }

    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll('.product-header a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                productHeader.classList.remove('show');
            }
        });
    });

    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            productHeader.classList.remove('show');
        }
    });
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});