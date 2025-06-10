// Ultra-wide Owl Carousel
$(document).ready(function () {
  $(".owl-carousel.ultra-wide").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    dots: false,
    smartSpeed: 500,
    lazyLoadEager: 2,
    onInitialized: function (event) {
      // apply aria-label info to next and previous buttons and make them focusable
      $('.owl-carousel.ultra-wide').find('.owl-prev').attr('aria-label', 'Previous Slide');
      $('.owl-carousel.ultra-wide').find('.owl-next').attr('aria-label', 'Next Slide');
      $('.owl-carousel.ultra-wide, .owl-prev, .owl-next').attr('tabindex', '0');
    },
    navText: [
      '<img src="https://res.cloudinary.com/nrityagram/image/upload/v1646318418/chevron-left-2_bta3sl.png" alt="left arrow">',
      '<img src="https://res.cloudinary.com/nrityagram/image/upload/v1646318418/chevron-right-2_dped9m.png" alt="right arrow">',
    ],

    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        dots: true,
        nav: false,
      },
      768: {
        items: 1,
        stagePadding: 127,
      },
      800: {
        items: 1,
        stagePadding: 132,
      },
      1024: {
        items: 1,
        stagePadding: 169,
      },
      1200: {
        items: 1,
        stagePadding: 198,
      },
      1300: {
        items: 1,
        stagePadding: 213,
      },
      1400: {
        items: 1,
        stagePadding: 231,
      },
      1500: {
        items: 1,
        stagePadding: 248,
      },
      1600: {
        items: 1,
        stagePadding: 264,
      },
      1700: {
        items: 1,
        stagePadding: 281,
      },
      1800: {
        items: 1,
        stagePadding: 297,
      },
      1920: {
        items: 1,
        // 16.5vw is the padding on both sides of center item
        // 0.165 * 1920 = 317
        stagePadding: 317,
      },
      2000: {
        items: 1,
        stagePadding: 330,
      },
      2100: {
        items: 1,
        stagePadding: 347,
      },
    },
  });
});

// Review Carousel
$(document).ready(function () {
  $(".owl-carousel.review-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    mouseDrag: false,
    touchDrag: false,
    lazyLoadEager: 2,
    animateOut: 'fadeOut',
    onInitialized: function (event) {
      // apply aria-label info to next and previous buttons and make them focusable
      $('.owl-carousel.review-slider').find('.owl-prev').attr('aria-label', 'Previous Slide');
      $('.owl-carousel.review-slider').find('.owl-next').attr('aria-label', 'Next Slide');
      $('.owl-carousel.review-slider, .owl-prev, .owl-next').attr('tabindex', '0');
    },
    navText: [
      '<img src="https://res.cloudinary.com/nrityagram/image/upload/v1646318418/chevron-left-2_bta3sl.png" alt="left arrow">',
      '<img src="https://res.cloudinary.com/nrityagram/image/upload/v1646318418/chevron-right-2_dped9m.png" alt="right arrow">',
    ],
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        nav: false,
      },
      768: {
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        nav: true
      },
      1399: {
        items: 1,
        touchDrag: false,
        mouseDrag: false
      }
    }
  });

})
