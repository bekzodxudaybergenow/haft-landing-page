let headerMenuBtn = document.querySelector('.header__menu');
let nav = document.querySelector('.nav');
let headerMenuSidebar = document.querySelector('.header__menu--sidebar');



headerMenuBtn.addEventListener('click', () => {
    headerMenuSidebar.classList.toggle('header__nav--active');
    headerMenuBtn.classList.toggle('header__menu--close');
})


const ourselfSwiper = new Swiper(".ourself__swiper", {
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        940: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        1440: {
            slidesPerView: 2.5,
            spaceBetween: 40
        }
    }
});