

$('.mob-menu-btn').on('click', function () {
    $(this).hide();
    $('.header-mob').slideDown();
});

$( document ).ready(function() {
    if ($(window).width() <= 768) {
        $('.menu-hide').on('click', function () {
            $('.mob-menu-btn').show();
            $('.header-mob').slideUp();
        })
        let $descNavBlock = $('.nav-block').clone();
        $('.header-mob-nav').empty().append($descNavBlock);
    }
});
// $( document ).ready(function() {
//     if ($(window).width() <= 768) {
//         $('.menu-hide-link').on('click', function () {
//             $('.mob-menu-btn').show();
//             $('.header-mob').slideUp();
//         })
//     }
// });

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    $('#scroll-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});

$('.faq-item-head').on('click', function () {
    $(this).parent('div.faq-item').toggleClass('active');
    $(this).siblings('div.faq-item-body').slideToggle();
})


$( document ).ready(function() {
    if ($(window).width() <= 768) {
        $('a[href^="#"]').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 130 + 'px'
                }, 300, 'linear');
            }
            $('.mob-menu-btn').show();
            $('.header-mob').slideUp();
            return false;
        });
    }else {
        $('a[href^="#"]').on('click', function (e) {
            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el - 120 + 'px'
                }, 300, 'linear');
            }
            return false;
        });
    }
});

$(document).ready(function(){
    var windowHeight = $(window).height();

    $('.header-mob').css('min-height', windowHeight + 40 + 'px');
});