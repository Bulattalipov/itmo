import {
    Swiper,
    Navigation,
    Pagination,
    Autoplay,
    EffectFade
  } from 'swiper';

export default function presentSlider() {
    const presentSlider = document.querySelectorAll('.js-present-slider');
    presentSlider.forEach(slider => {

      const arroySlide = slider.querySelectorAll('.swiper-slide');
      let loop = arroySlide.length < 2 ? false : true;

      new Swiper(slider.querySelector('.swiper'), {
        loop: loop,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true, 
        modules: [Navigation, Pagination, EffectFade],
        navigation: {
          nextEl: '.js-present-slider .next',
          prevEl: '.js-present-slider .prev'
        },
        pagination: {
          el: '.js-present-slider .swiper__pagination',
          type: 'fraction',
          formatFractionCurrent: function (n) {
            return (n < 10 ? '0' : '') + n;
          },
          formatFractionTotal: function (n) {
            return (n < 10 ? '0' : '') + n;
          }
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        on: {
          init: function (swiper) {
            swiper.el.classList.remove("loading");
            swiper.updateAutoHeight();
          },
        },
      });

      const btn = slider.querySelector('.slider-pagination-btns__button').classList.contains('swiper-button-lock');
      if(btn){
        slider.querySelector('.slider-pagination-btns__button').parentElement.classList.add('hide');
      } else{
        slider.querySelector('.slider-pagination-btns__button').parentElement.classList.remove('hide');
      }

    });
  }