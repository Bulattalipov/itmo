import {
    Swiper,
    Navigation,
    EffectFade,
    Controller
  } from 'swiper';

export default function singleSlider() {
  const singleSlider = document.querySelectorAll('.quote-single__slider');
  singleSlider.forEach(slider => {
    
    const textSwiper = new Swiper(slider.querySelector('.quote-single__swiper-text'), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 10,
      modules: [Navigation, Controller, EffectFade],
      effect: 'fade',
      autoHeight: true,
      fadeEffect: {
        crossFade: true
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        }
      },
      navigation: {
        nextEl: '.quote-single__slider .next',
        prevEl: '.quote-single__slider .prev'
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });

    const sliderVideo = new Swiper(slider.querySelector('.quote-single__swiper-video'), {
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

    textSwiper.controller.control = sliderVideo;
    sliderVideo.controller.control = textSwiper;

  });
}