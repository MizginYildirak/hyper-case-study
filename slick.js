$(document).ready(function () {
  $(".slider").slick({
    vertical: true,
    verticalSwiping: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,

  });


  $(".featured_image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    horizontalswiping: true,
  });


});
