document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const close = document.querySelector('.header__close');
    const menu = document.querySelector('.header__menu');

    burger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
