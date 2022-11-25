import 'lazysizes';
import {
  Swiper,
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Controller
} from 'swiper';
import HystModal from './HystModal';
import Forms from './Forms';
import map from './map';
import debug from './utils/debug';
import mobileSlider from './moduls/mobileSlider';
import tabsSlider from './moduls/tabsSlider';
import Accordions from './Accordions';
import presentSlider from './moduls/presentSlider';
import editableTextContainer from './moduls/editableTextContainer';
import tabs from './moduls/tabs';
import partnersSlider from './moduls/partnersSlider';
import simpleSlider from './moduls/simpleSlider';
import fancyboxVideo from './moduls/fancybox-video';
import singleSlider from './moduls/singleSlider';
import tabsSliderMain from './moduls/tabsSliderMain';
import timer from './moduls/timer';
import choicesSelector from './moduls/choices-select'
import oneSlideSlider from './moduls/oneSlideSlider';
import mobileSliderNews from './moduls/mobileSliderNews';

document.addEventListener('DOMContentLoaded', function () {
  window.itmo = {}; // Тут будут лежать всякие функции с фронта

  // document.header = document.querySelector('.header');

  modals();
  forms();
  map();
  debug(); // Нажми 5 раз "d" на клавиатуре
  accordions();
  searchFields();
  miniSliders();
  mobileSlider();
  ordinarySlider();
  contentSliders();
  ordinary3slide();
  tabsSlider();
  presentSlider();
  simpleSlider();
  singleSlider();
  tabsSliderMain();
  oneSlideSlider();
  mobileSliderNews();

  timer();
  fancyboxVideo();
  tabs();
  partnersSlider();
  choicesSelector();
  editableTextContainer();
});

// document.fonts.ready.then((res) => {
// })

function modals() {
  new HystModal({
    beforeOpen: instance => {
      // const target = instance.starter;
      //
      // if (target.classList.contains('js-reset-by-modal')) {
      //     const form = target.closest('form');
      //     form && form.reset();
      // }
    }
  });
}

function forms() {
  new Forms({
    onSuccess: (form, response) => {
      modals.open('#success');
    },
    onError: (form, response) => {
      modals.open('#error');
    }
  });
}

// function maps() {
//   [...document.querySelectorAll('.js-map')].forEach(map => {


//     const url = `https://api-maps.yandex.ru/2.1/?apikey=${map.dataset.api}&lang=ru_RU`;

//     loadApi('yandex', url, () => {
//       ymaps.ready(() => {
//         const instance = new Map(map, {
//           icon: {
//             url: 'img/placemark.svg'
//           }
//         });
//         instance.addPlace([map.dataset.initialLongitude, map.dataset.initialLatitude]);
//       });
//     });
//   });
// }

function accordions() {
  new Accordions({
    selectors: {
      container: '.js-footer-accordions',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn',
      content: '.js-accordion-content'
    }
  });
}

function miniSliders() {
  const miniSliders = document.querySelectorAll('.js-mini-slider');
  miniSliders.forEach(slider => {
    new Swiper(slider.querySelector('.swiper'), {
      loop: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      navigation: {
        nextEl: '.js-mini-slider .next',
        prevEl: '.js-mini-slider .prev'
      },
      pagination: {
        el: '.js-mini-slider .mini-slider__pagination',
        type: 'fraction',
        formatFractionCurrent: function (n) {
          return (n < 10 ? '0' : '') + n;
        },
        formatFractionTotal: function (n) {
          return (n < 10 ? '0' : '') + n;
        }
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      },
    });
  });
}

function contentSliders() {
  const contentSliders = document.querySelectorAll('.content-slider__box');
  contentSliders.forEach(slider => {
    const contentSwiper = new Swiper(slider.querySelector('.content-swiper'), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 10,
      modules: [Navigation, Pagination, EffectFade, Controller],
      breakpoints: {
        768: {
          slidesPerView: 1,
        }
      },
      navigation: {
        nextEl: '.content-slider__box .next',
        prevEl: '.content-slider__box .prev'
      },
      pagination: {
        el: '.content-slider__box .content-slider__pagination',
        type: 'fraction',
        renderFraction: function (currentClass) {
          return '<span class="' + currentClass + '"></span>'
        },
        formatFractionCurrent: function (n) {
          return (n < 10 ? '0' : '') + n;
        }
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });

    const sliderText = new Swiper(slider.querySelector('.content-slider__text-block'), {
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

    contentSwiper.controller.control = sliderText;
    sliderText.controller.control = contentSwiper;

  });
}



function ordinarySlider() {
  const ordinarySlider = document.querySelectorAll('.cards-main__slider');
  ordinarySlider.forEach(slider => {
    new Swiper(slider.querySelector('.ordinary-slider'), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      modules: [Navigation, Pagination],
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },
      navigation: {
        nextEl: '.cards-main__slider .next',
        prevEl: '.cards-main__slider .prev'
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });
  });
}

function ordinary3slide() {
  const ordinary3slide = document.querySelectorAll('.cards-simple__slider');



  ordinary3slide.forEach(slider => {
    new Swiper(slider.querySelector('.cards-simple__swiper'), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 20,
      modules: [Navigation],
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      },
      navigation: {
        nextEl: '.cards-simple__navigation .next',
        prevEl: '.cards-simple__navigation .prev'
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });
  });
}

function searchFields() {
  const containers = document.querySelectorAll('.js-search');

  containers.forEach(container => {
    const openButton = container.querySelector('.search-field__button--open');
    const closeButton = container.querySelector('.search-field__button--close');
    const input = container.querySelector('.search-field__element');
    const resultSearch = container.querySelector('.search-field__result');

    openButton.addEventListener('click', () => {
      document.body.classList.add('js-search-filed-opened');
      container.classList.add('active');
      openButton.setAttribute('disabled', 'true');
      closeButton.removeAttribute('disabled');
      input.focus();
    });
    closeButton.addEventListener('click', () => {
      container.classList.remove('active');
      document.body.classList.remove('js-search-filed-opened');
      openButton.removeAttribute('disabled');
      closeButton.setAttribute('disabled', 'true');
      resultSearch.classList.remove('active');
    });


    let timeout = null;

    input.addEventListener('keyup', function(){

      clearTimeout(timeout);

      timeout = setTimeout(function(){
        resultSearch.classList.add('active');
      }, 500)

      if(input.value == ''){
        return resultSearch.classList.remove('active');
      }
    });
  });
}