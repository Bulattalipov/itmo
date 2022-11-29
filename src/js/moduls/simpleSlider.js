import {
  Swiper,
  Navigation
} from 'swiper';

export default function simpleSlider() {
  const simpleSlider = document.querySelectorAll('.quote-more__slider');
  
  simpleSlider.forEach(slider => {

    const arroySlide = slider.querySelectorAll('.swiper-slide');
    let loop = arroySlide.length <= 2 ? false : true;

    new Swiper(slider.querySelector('.quote-more__swiper'), {
      speed: 500,
      slidesPerView: 2,
      spaceBetween: 50,
      modules: [Navigation],
      loop: loop,
      breakpoints: {
        280: {
          slidesPerView: 1
        },
        800: {
          slidesPerView: 2
        },
        1200: {
          spaceBetween: 155
        }
      },
      navigation: {
        nextEl: '.quote-more__slider .next',
        prevEl: '.quote-more__slider .prev'
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