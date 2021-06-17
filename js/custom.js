$(function(){

  // sidebar;
  $('.bars i').click(function(){
    $('.sidebar').addClass('sidebar-show');
  });
  $('.bars i').click(function(){
    $('.fa-close').toggleClass('fa-bars');
  });



  // back-to-top;
  $('.back-to-top').click(function(){
    $('html,body').animate({scrollTop:0},1500);
  });
  $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 300){
          $('.back-to-top').fadeIn(500);
      }
      else {
          $('.back-to-top').fadeOut(500);
      }
  });  

  //animation scroll js;
  var html_body = $('html, body');
  $('nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 90
              }, 1500);
              return false;
          }
      }
  });

  // brand-slider;
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
    prevArrow:'.left-arrow',
    nextArrow:'.right-arrow',
    speed: 1500,
  });

  // mixit-up ;
  var containerEl = document.querySelector('.protfolio-slider');
  var mixer = mixitup(containerEl);

  // venubox;
  $('.venobox').venobox();

  // team-slider;
  $('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  //counterup;
  $('.counter').counterUp({
    delay: 5,
    time: 1000,
  });

  // blog-slider;
  $('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  // brand-slider;
  $('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });





});


