const botaoAbrir = document.querySelector(".header-menu-burger-open");
const botaoFechar = document.querySelector(".header-menu-burger-close");
const sideBar = document.querySelector(".side-bar");
const overlay = document.querySelector(".overlay");
const clickSideBar = document.querySelectorAll(".nav-side-bar a");

function abrirMenuLateral() {
    sideBar.classList.add('ativo');
    overlay.classList.add('ativo');
    document.body.style.overflow = 'hidden'; 
}

function fecharMenuLateral() {
    sideBar.classList.remove('ativo');
    overlay.classList.remove('ativo');
    document.body.style.overflow = 'auto';
}


botaoAbrir.addEventListener('click', abrirMenuLateral);
botaoFechar.addEventListener('click', fecharMenuLateral);


clickSideBar.forEach(link => {
    link.addEventListener('click', fecharMenuLateral);
});
