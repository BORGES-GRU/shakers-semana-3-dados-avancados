// @ts-nocheck

const initSwiper = () => {
  const swiperElement = document.querySelector('.mySwiper');

 if (swiperElement && typeof Swiper !== 'undefined') {
     new Swiper('.mySwiper', { 
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  } else {
    console.error("Erro: A biblioteca Swiper não foi encontrada. Verifique se o script do CDN está no seu arquivo Liquid.");
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);

window.addEventListener('load', initSwiper);

document.addEventListener('shopify:section:load', initSwiper);