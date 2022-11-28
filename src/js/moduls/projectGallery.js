import {
    Swiper,
    Navigation,
    EffectFade
  } from 'swiper';

export default function projectGallery() {
    const projectGallery = document.querySelectorAll('.project-gallery__slider');
    projectGallery.forEach(slider => {
      new Swiper(slider.querySelector('.project-gallery__swiper'), {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 12,
        autoHeight: true, 
        modules: [Navigation, EffectFade],
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 12
            }
          },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading");
            swiper.updateAutoHeight();
          },
        },
      });
    });
  }