$(document).ready(function(){
    $('.slider').slick({
        vertical: true, 
        verticalSwiping: false, 
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false, 
        dots: false
    });
});
