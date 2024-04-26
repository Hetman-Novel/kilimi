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