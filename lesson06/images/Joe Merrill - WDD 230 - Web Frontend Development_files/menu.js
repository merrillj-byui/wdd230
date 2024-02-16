const menuButton = document.querySelector('#menubutton');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuButton.classList.toggle('open');
});