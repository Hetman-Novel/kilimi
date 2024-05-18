let carpetCarouselSlider = document.querySelector('.carpet-carousel__slider')
if (carpetCarouselSlider) {
   new Swiper(carpetCarouselSlider, {  
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 23,
      watchOverflow: true,
   
      navigation: {
         nextEl: '.carpet-carousel__btn-next',
         prevEl: '.carpet-carousel__btn-prev',
      },
      
      effect: 'slide',

      autoHeight: true,

      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
      },

      breakpoints: {
         0: {
            slidesPerView: 1.3,
         },
         461: {
            slidesPerView: 2,
         },
         662: {
            slidesPerView: 3,
         },
         960: {
            slidesPerView: 4,
         }
      },
   
   })
}

let reviewsSlider = document.querySelector('.reviews__slider')
if (reviewsSlider) {
   new Swiper(reviewsSlider, {  
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 15,
      watchOverflow: true,
   
      navigation: {
         nextEl: '.reviews__btn-next',
         prevEl: '.reviews__btn-prev',
      },

      effect: 'slide',

      breakpoints: {
         0: {
            slidesPerView: 1,
         },
         662: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         }
      },
   
   })
}

let pageProductWrapProductSliders = document.querySelector('.page-product__wrapProductSliders')
if (pageProductWrapProductSliders) {
   var swiper = new Swiper(".page-product__sliderSmall", {
      spaceBetween: 17,
      slidesPerView: 5,
      slidesPerGroup: 1,
      autoHeight: true,
      //freeMode: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      loop: false,
      //initialSlide: 1,
      breakpoints: {
         0: {
            spaceBetween: 12,
            slidesPerView: 3,
         },
         576: {
            slidesPerView: 4,
         },
         768: {
            slidesPerView: 5,
            spaceBetween: 15,
         },
         801: {
            slidesPerView: 5,
            spaceBetween: 15,
         },
         1025: {
            spaceBetween: 17,
         },
      },
   });
   var swiper2 = new Swiper(".page-product__sliderBig", {
      effect: 'fade',
      autoHeight: true,
      fadeEffect: {
         crossFade: true
      },
      thumbs: {
         swiper: swiper,
      },
   });
}

let colorsAndShapesSlider = document.querySelector('.colors-and-shapes__slider')
if (colorsAndShapesSlider) {
   new Swiper(colorsAndShapesSlider, {  
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 9,
      watchOverflow: true,
      navigation: {
         nextEl: '#colors-and-shapes-btn-next',
         prevEl: '#colors-and-shapes-btn-prev',
      },
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 2,
            spaceBetween: 12,
         },
         421: {
            slidesPerView: 3,
         },
         576: {
            slidesPerView: 4,
         },
         700: {
            slidesPerView: 4,
            spaceBetween: 15,
         },
         961: {
            slidesPerView: 4,
            spaceBetween: 9,
         }
      },
   })
}

/*
let slidersDisplayDelay = document.querySelectorAll('.slider-display-delay')
if (slidersDisplayDelay) {
   setTimeout(() => {
      slidersDisplayDelay.forEach(function(sliderDisplayDelay) {
         sliderDisplayDelay.classList.remove('display-delay')
      })
   }, 300);
}
*/