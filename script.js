$(document).ready(function(){
    $('.slider').slick({
        vertical: true, // Dikey kaydırma aktif
        verticalSwiping: false, // Yukarı kaydırma için dokunmatik destek
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true, // Otomatik kaydırma
        autoplaySpeed: 5000,
        arrows: false, // Okları kaldır
        dots: false
    });
});
