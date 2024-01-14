let headerMenuBtn = document.querySelector('.header__menu');
let nav = document.querySelector('.nav');
let headerMenuSidebar = document.querySelector('.header__menu--sidebar');



headerMenuBtn.addEventListener('click', () => {
    headerMenuSidebar.classList.toggle('header__nav--active');
    headerMenuBtn.classList.toggle('header__menu--close');
})