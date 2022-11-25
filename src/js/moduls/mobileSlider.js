import {
    Swiper,
  } from 'swiper';

export default function mobileSlider() {
    const container = document.querySelector('.js-mobile-slider');
    if (!container) return;

    const spaceBetween = container.dataset.space ? Number(container.dataset.space) : 8;

    let mql = window.matchMedia('(max-width: 768px)');
    if (mql.matches) {
        new Swiper(container, {
            speed: 500,
            slidesPerView: 1,
            spaceBetween: spaceBetween,
            autoHeight: true,
            breakpoints: {
                768: {
                  spaceBetween: 20
                }
              },
            on: {
                init: function (swiper) {
                    swiper.el.classList.remove("loading")
                },
            }
        })
    }  else {
        container.classList.remove('loading')
    }
}