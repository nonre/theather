jQuery(function($) {
    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.header__slider-controls'),
        prevArrow: '<button class="header__slider-btn _prev" type="button"><svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928938C33.9526 0.538414 33.3195 0.538414 32.9289 0.928938C32.5384 1.31946 32.5384 1.95263 32.9289 2.34315L38.5858 8.00001L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-1.74846e-07 9L40 9.00001L40 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="white"/>\n' +
          '</svg> пред</button>',
        nextArrow: '<button class="header__slider-btn _next" type="button">след <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928938C33.9526 0.538414 33.3195 0.538414 32.9289 0.928938C32.5384 1.31946 32.5384 1.95263 32.9289 2.34315L38.5858 8.00001L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-1.74846e-07 9L40 9.00001L40 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="white"/>\n' +
          '</svg></button>',
    });
    $('.projects__wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    });
});
