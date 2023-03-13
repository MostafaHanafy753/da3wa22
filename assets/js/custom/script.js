(function ($) {
  $('.se-vi-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: true,
    prevArrow: '.prev-btn',
    nextArrow: '.next-btn',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
  $('.se-vii-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    prevArrow: '.prev-btn2',
    nextArrow: '.next-btn2',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });

  $('#nav-toggle-btn').on('click', function() {
    $('#theme-navbar').toggleClass('menu-open');
  });

}(jQuery));
