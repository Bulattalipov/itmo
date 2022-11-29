import {
    Swiper,
  } from 'swiper';

export default function mobileSliderNews() {
    const mobileSliderNews = document.querySelectorAll('.js-mobile-sliderNews');

    mobileSliderNews.forEach(slider => {
        if (!slider) return;

        const spaceBetween = slider.dataset.space ? Number(slider.dataset.space) : 20;

        let mql = window.matchMedia('(max-width: 1024px)');
        if (mql.matches) {
            new Swiper(slider, {
                speed: 500,
                slidesPerView: 1,
                spaceBetween: spaceBetween,
                autoHeight: true,
                breakpoints: {
                    640: {
                    slidesPerView: 2,
                    }
                },
                on: {
                    init: function (swiper) {
                        swiper.el.classList.remove("loading")
                    },
                }
            })
        }  else {
            slider.classList.remove('loading')
        }
    })
}