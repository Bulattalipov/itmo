import {
  Swiper,
  Navigation
} from 'swiper';

export default function partnersSlider() {
  const partnersSlider = document.querySelectorAll('.partners__slider');

  partnersSlider.forEach(slider => {

    const arroySlide = slider.querySelectorAll('.swiper-slide');
    let loop = arroySlide.length <= 8 ? false : true;

    const nextEl = slider.querySelector(".next");
    const prevEl = slider.querySelector(".prev");

    new Swiper(slider.querySelector('.partners__swiper'), {
      speed: 500,
      slidesPerView: 2,
      spaceBetween: 15,
      loop: loop,
      modules: [Navigation],
      breakpoints: {
        360: {
          slidesPerView: 3,
        },
        460: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        900: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 7,
        },
        1200: {
          slidesPerView: 8,
        }
      },
      navigation: {
        nextEl: nextEl,
        prevEl: prevEl
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });

    const btn = slider.querySelector('.slider-pagination-btns__button').classList.contains('swiper-button-lock');
    if(btn){
      slider.querySelector('.slider-pagination-btns__button').parentElement.classList.add('hide');
    } else{
      slider.querySelector('.slider-pagination-btns__button').parentElement.classList.remove('hide');
    }

  });
}