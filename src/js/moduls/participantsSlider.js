import Swiper, {
    Navigation,
    Controller,
    CreativeEffect
  } from 'swiper';
  
  Swiper.use([Navigation, Controller, CreativeEffect]);
  
  export default () => {
    const sliderIntroNav = new Swiper('.participants__slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.js-participants-btn-next',
        prevEl: '.js-participants-btn-prev',
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
  
    const sliderIntro = new Swiper('.participants__slider2', {
      slidesPerView: 1,
      spaceBetween: 0,
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
  
    sliderIntroNav.controller.control = sliderIntro;
    sliderIntro.controller.control = sliderIntroNav;
  };
  