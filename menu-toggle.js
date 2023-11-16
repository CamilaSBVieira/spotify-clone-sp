const toggle = document.getElementById('menu-toggle_mobile')
const menu = document.getElementById('menu')

toggle.addEventListener('click', () => {
    menu.getAttribute('class') == 'hide-menu' ? menu.classList.toggle('show-menu') : menu.classList.toggle('hide-menu')
})