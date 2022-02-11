$(function () {
  // banner slider
  $('#banner').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
  });

  //venobox
  $('.new_video').venobox({});

  //testimonial part
  $('.test_slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  //logo part
  $('.logos').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 800,
    infinite: true,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });

  //counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  });

  // menu fix
  var mpx = 50;

  $(window).scroll(function () {
    var menu_scroll = $(this).scrollTop();

    if (menu_scroll > mpx) {
      $('.main_menu').addClass('fixd');
    } else {
      $('.main_menu').removeClass('fixd');
    }

  });

  // back to top
  $('.btt').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    });
  });

  // fade
  $(window).scroll(function () {
    var upore = $(this).scrollTop();

    if (upore > 500) {
      $('.btt').fadeIn();
    } else {
      $('.btt').fadeOut();
    }

  });

});