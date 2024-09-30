document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.benefits__slider');

    if (slider && window.innerWidth < 922) {
        let benefitsSlider = new Swiper(slider, {
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
});
