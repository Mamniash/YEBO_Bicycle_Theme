document.querySelector('.icon-menu').addEventListener('click', function () {
   this.classList.toggle('active');
   document.querySelector('.menu__body').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
   console.log('sucsecc');
});

// console.log(document.querySelector('.slider__body').length);

// if (document.querySelector('.slider__body').length > 0) {
//    console.log('awhfiriergrthjftrhtj');
//    document.querySelector('.slider__body').slick({
//       dots: true,
//       arrows: false,
//       accessibility: false,
//       slidesToShow: 1,
//       autoplaySpeed: 2600,
//       nextArrow: '<button type="button" class="slick-next"></button>',
//       prevArrow: '<button type="button" class="slick-prev"></button>',
//       responsive: [{
//          breakpoint: 768,
//          settings: {}
//       }]
//    });
// }

new Swiper('.swiper-container', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
});


function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();