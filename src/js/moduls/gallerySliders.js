import Swiper, {
    Navigation,
    Controller,
    CreativeEffect,
    Lazy,
  } from 'swiper';
  
  Swiper.use([Navigation, Controller, CreativeEffect, Lazy]);
  
  export default () => {
  
    if (window.matchMedia('(min-width: 769px)').matches) {
      const sliderGallery = new Swiper('.gallery__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        lazy: true,
        navigation: {
          nextEl: '.js-gallery-btn-next',
          prevEl: '.js-gallery-btn-prev',
        },
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.4,
            spaceBetween: 10,
          },
          769: {
            slidesPerView: 1,
            spaceBetween: 0,
            lazy: true,
            effect: "creative",
            creativeEffect: {
              prev: {
                shadow: true,
                translate: ["-50%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            },
          },
        },
      });
  
      const sliderGallery2 = new Swiper('.gallery__slider2', {
        slidesPerView: 1,
        spaceBetween: 0,
        lazy: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-50%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });
  
      const sliderGallery3 = new Swiper('.gallery__slider3', {
        slidesPerView: 1,
        spaceBetween: 0,
        lazy: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-50%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });
  
      sliderGallery.controller.control = sliderGallery2;
      sliderGallery2.controller.control = sliderGallery;
      sliderGallery3.controller.control = sliderGallery2;
      sliderGallery.controller.control = sliderGallery3;
      sliderGallery2.controller.control = sliderGallery3;
    } else {
      const mobileSlider = new Swiper('.gallery__slider', {
        slidesPerView: 1.2,
        spaceBetween: 20,
      });
    }
  };