$('.header__menu-burger').on('click', function() {
    $('.header__menu-list').toggleClass('header__menu-list--active');
});
$('.slider-main').slick({
    arrows: false,
    vertical: true,
    // rows: 1,
    // slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    slidesToShow: 3,
    infinite: true,
});
$('.slider-main-sec').slick({
    arrows: false,
    vertical: true,
    // rows: 1,
    // slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    slidesToShow: 3
});