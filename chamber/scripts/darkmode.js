const darkMode = document.querySelector('#darkmode');
const body = document.querySelector('body');
/* Note: menuButton is declared in the menu.js*/

darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('on');
    if (darkMode.classList == 'on') {
        body.style.backgroundColor = '#374249';
        body.style.color = 'white';
        darkMode.style.color = 'yellow';
        menuButton.style.color = 'white';
    }
    else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        darkMode.style.color = 'black';
        menuButton.style.color = 'black';
    }
});