import {
    Swiper,
    Navigation,
    EffectFade
  } from 'swiper';

export default function projectGallery() {
    const projectGallery = document.querySelectorAll('.project-gallery__slider');
    projectGallery.forEach(slider => {

      const arroySlide = slider.querySelectorAll('.swiper-slide');
      let loop = arroySlide.length <= 2 ? false : true;

      new Swiper(slider.querySelector('.project-gallery__swiper'), {
        loop: loop,
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

      const btn = slider.querySelector('.slider-pagination-btns__button').classList.contains('swiper-button-lock');
      if(btn){
        slider.querySelector('.slider-pagination-btns__button').parentElement.classList.add('hide');
      } else{
        slider.querySelector('.slider-pagination-btns__button').parentElement.classList.remove('hide');
      }

    });
  }