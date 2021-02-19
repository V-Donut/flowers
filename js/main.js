$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,
  
    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 2
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 6
      }
    }
  });
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,
  
    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(".review-link").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/flowers/photo-1.png',
        opts : {
          caption : '1 caption',
        }
      },
      {
        src  : 'img/flowers/photo-2.jpg',
        opts : {
          caption : '2 caption',
        }
      },
      {
        src  : 'img/flowers/photo-3.jpg',
        opts : {
          caption : '3 caption',
        }
      },
      {
        src  : 'img/flowers/photo-4.jpg',
        opts : {
          caption : '4 caption',
        }
      },
      {
        src  : 'img/flowers/photo-5.jpg',
        opts : {
          caption : '5 caption',
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

});