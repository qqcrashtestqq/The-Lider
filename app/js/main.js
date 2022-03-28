// Слайдер
const newsSlider = new Swiper('.news__swiper', {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    319: {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    }
  }
});
// Меню бургер
const iconMenu = document.querySelector('.header__burger');
const iconHeader = document.querySelector('.header__menu');

iconMenu.addEventListener('click', function() {
    iconMenu.classList.toggle('active');
    iconHeader.classList.toggle('active');
});
