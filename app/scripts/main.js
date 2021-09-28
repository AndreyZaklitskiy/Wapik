/*slick-slider*/
$(document).ready(function(){
  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          prevArrow: '<button type="button" class="slickPrev"></button>',
          nextArrow: '<button type="button" class="slickNext"></button>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slickPrev"></button>',
          nextArrow: '<button type="button" class="slickNext"></button>'
        }
      }
    ]
});
});
/*adaptive-menu-button-script*/
$(document).ready(function() {
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.hamburger-menu').toggleClass('visible');
  });
});
