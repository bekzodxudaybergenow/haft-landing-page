let headerMenuBtn = document.querySelector('.header__menu');
let headerNav = document.querySelector('.header__nav');



headerMenuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav--active');
})