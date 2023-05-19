const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

toggleMenu () => {
    if(!showMenu) {
        hamburger.classList.add('open');
    }
}