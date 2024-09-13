const botaoAbrir = document.querySelector(".header-menu-burger-open")
const botaoFechar = document.querySelector(".header-menu-burger-close")
const sideBar = document.querySelector(".side-bar")

function abrirMenuLaral(){
    sideBar.classList.add('ativo')
}
function fecharMenuLaral(){
    sideBar.classList.remove('ativo')
}

botaoAbrir.addEventListener('click', abrirMenuLaral)
botaoFechar.addEventListener('click', fecharMenuLaral)
