const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__body')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open-menu')
    menu.classList.toggle('menu-open')
})