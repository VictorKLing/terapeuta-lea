let lastScrollTop = 0;

// Função para fixar o cabeçalho ao rolar para cima
document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPos > lastScrollTop) {
        header.style.top = '-80px';
    } else {
        header.style.top = '0';
    }

    lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
});