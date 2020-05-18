$(function () {
    const signs = document.querySelectorAll('x-sign');
    const randomIn = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const mixupInterval = (el) => {
        const ms = randomIn(2000, 4000);
        el.style.setProperty('--interval', `${ms}ms`);
    };

    signs.forEach((el) => {
        mixupInterval(el);
        el.addEventListener('webkitAnimationIteration', () => {
            mixupInterval(el);
        });
    });
});
//#banner - neon effect

$(function () {
    $('#header').hide();

    $(window).scrollTop(0);

    $('.cBanner').addClass('on').siblings().removeClass('on');

    $(window).scroll(function () {
        // if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        //     $('#header').slideDown();
        //     $('#header .nav .menu li').slideDown();
        // } else
        console.log($(document).scrollTop());

        var scrollTop = document.body.scrollTop;
        var scrollTop2 = document.documentElement.scrollTop;
        if (scrollTop > 10 || scrollTop2 > 10) {
            $('#header').slideDown();
            $('#header .nav .menu li').slideDown();
        } else {
            $('#header').slideUp();
            $('#header .nav .menu li').slideUp();
        }
        if (scrollTop >= 500 || scrollTop2 >= 500) {
            $('#scrollArrow').stop().animate({ opacity: '0' }, 1000).hide();
        } else {
            $('#scrollArrow').stop().animate({ opacity: '1' }, 1000).show();
        }

        if ($(window).scrollTop() > 0 && $(window).scrollTop() < 700) {
            $('.cBanner').addClass('on').siblings().removeClass('on');
        } else if ($(window).scrollTop() > 700 && $(window).scrollTop() < 2400) {
            $('.cScrollArrow').addClass('on').siblings().removeClass('on');
        } else if ($(window).scrollTop() > 2400 && $(window).scrollTop() < 3000) {
            $('.cGallary').addClass('on').siblings().removeClass('on');
        } else if ($(window).scrollTop() > 3000) {
            $('.cMap').addClass('on').siblings().removeClass('on');
        }
    }); //$(window).scroll()
});
// #header - nav event

$(function () {
    $('#scrollArrow').click(function () {
        $(window).scrollTop(750);
    });
});
// #scrollArrow - click event

$(function () {
    $('.cBanner').click(function () {
        $(window).scrollTop(10);
    });
    $('.cScrollArrow').click(function () {
        $(window).scrollTop(800);
    });
    $('.cGallary').click(function () {
        $(window).scrollTop(2700);
    });
    $('.cMap').click(function () {
        $(window).scrollTop(3280);
    });
});
//#sideBtn - click event

$(function () {
    $('.mapImg').addClass('off');
    $('.mapImg').removeClass('on');

    $('.mapImg').click(function () {
        $(this).toggleClass('on');
        $(this).toggleClass('off');
        $(this).find('.mHere').stop().delay(3000).toggle(500);
        $(this)
            .find('.mClick')
            .stop()
            // .delay(3000)
            .toggle(500);
    });
});
//.map - click event
