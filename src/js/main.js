$(document).ready(function(){
    var $nav = $('.main-nav'),
        $openNavBtn = $('.mob-nav-burger'),
        $closeNavBtn = $('.mob-nav-close'),
        $openPopUp = $('.fs-item-action'),
        $closePopUp = $('.popup-close');


    $openNavBtn.on('click', function(e){
        e.preventDefault();
        $nav.slideDown(350);
        $openNavBtn.attr('data-show', 'false');
        $closeNavBtn.attr('data-show', 'true');
    });
    $closeNavBtn.on('click', function(e){
        e.preventDefault();
        $nav.slideUp(350);
        $closeNavBtn.attr('data-show', 'false');
        $openNavBtn.attr('data-show', 'true');
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 768 && $nav.is(':hidden')) {
            $nav.removeAttr('style');
        }
    });

    /* -------- FULL SLIDER -------- */

    $('.fs-list').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    prevArrow: '.fs-prev-arrow',
                    nextArrow: '.fs-next-arrow'
                }
            }
            ]
    });

/* -------- MINI SLIDER -------- */

    $($openPopUp).on('click', function(){
        $('.popup-wrapper').addClass('active')
    });
    $($closePopUp).on('click', function(){
        $('.popup-wrapper').removeClass('active')
    });

    $('.ms-gallery-list').slick({
        dots: false,
        arrows: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true,
                    adaptiveHeight: true,
                    prevArrow: '.ms-prev-arrow',
                    nextArrow: '.ms-next-arrow'
                }
            }
        ],
        prevArrow: '.ms-prev-arrow',
        nextArrow: '.ms-next-arrow'
    });

    $('.main-nav-item-link').on('click', function(e){
        e.preventDefault();
        var scrolTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scrolTo).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = scrolTo;
        });
    })
});