let swiperCards = new Swiper('.card__content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        728:{
            slidesPerView: 2,
            spaceBetween: 20
        },
        968:{
            slidesPerView: 3,
            spaceBetween: 20
        },
    }
  });