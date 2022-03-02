let mask = document.querySelector('.mask');
window.addEventListener('load', ()=>{
    console.log('hide');
    mask.classList.add('hide-preloader');
    mask.remove();
});

//burger-menu

const openMobileMenu = document.querySelector('.burger-nav');
const burgerMenuOverlay = document.querySelector('.menu-overlay');
const closeMobileMenu = document.querySelector('.burger-nav-close');

openMobileMenu.addEventListener('click', ()=>{
    burgerMenuOverlay.classList.add('menu-overlay--active', 'fade-menu');
})
closeMobileMenu.addEventListener('click', ()=>{
    burgerMenuOverlay.classList.remove('menu-overlay--active', 'fade-menu');
})