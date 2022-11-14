import {
    Swiper,
    Navigation,
    EffectFade,
    Controller
  } from 'swiper';
  
  export default function oneSlideSlider() {

    const oneSlideSlider = document.querySelectorAll('.js-one-slide');
    oneSlideSlider.forEach(slider => {
      const contentSwiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 20,
        modules: [EffectFade, Navigation, Controller],
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.js-one-slide .next',
          prevEl: '.js-one-slide .prev'
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading")
          },
        }
      });

      const textSlider = new Swiper(slider.querySelector('.content-text__text-slider'), {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [ EffectFade, Controller],
        effect: 'fade',
        autoHeight: true,
        fadeEffect: {
          crossFade: true
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading")
          },
        }
      });
  
      contentSwiper.controller.control = textSlider;
      textSlider.controller.control = contentSwiper;

    });
  }