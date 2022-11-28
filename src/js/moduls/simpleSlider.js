import {
  Swiper,
  Navigation
} from 'swiper';

export default function simpleSlider() {
  const simpleSlider = document.querySelectorAll('.quote-more__slider');
  
  simpleSlider.forEach(slider => {
    new Swiper(slider.querySelector('.quote-more__swiper'), {
      speed: 500,
      slidesPerView: 2,
      spaceBetween: 50,
      modules: [Navigation],
      loop: true,
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
  });
}