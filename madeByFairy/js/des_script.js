$(function () {
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1400) {
            var num = 0; //page
            var moving = false;

            function inlayout() {
                var t = -1 * num * window.innerHeight; //내 윈도우 높이만큼 페이지를 -로 조정
                $('.section').css({ top: t + 'px' });
                $('.section .page').css({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
                $('.section .page').removeClass('loading');
                $('.aside .item').removeClass('on');
                $('.aside .item').eq(num).addClass('on');
            } //inlayout

            inlayout();

            function dolayout() {
                var t = -1 * num * window.innerHeight;
                $('.section').css({ top: t + 'px' });
                $('.section .page').css({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            } //dolayout

            //resize event
            $(window).resize(function () {
                dolayout();
            }); //$(window).resize

            //mousewheel event
            $('html body').on('mousewheel DOMMouseScroll', function (e) {
                console.log('wheelDelta : ', e.originalEvent.wheelDelta); //Chrome down -120, up 120
                console.log('detail : ', e.originalEvent.detail); //Firefox down 3, up -3

                if (moving == false) {
                    moving = true;
                    var t = $('.section').offset().top;
                    var h = window.innerHeight;

                    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                        //up
                        if (num > 0) {
                            num--;
                            t += h; //t = t + h
                        }
                    } else if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
                        //down
                        if (num < 4) {
                            num++;
                            t -= h;
                        }
                    }
                } //if(moving==false)

                $('.section').animate({ top: t }, 500, function () {
                    moving = false;

                    if (num != 0) {
                        $('.header .nav').addClass('on');
                        // $('.mob_header .mob_nav').addClass('on');
                    } else {
                        $('.header .nav').removeClass('on');
                        // $('.mob_header .mob_nav').removeClass('on');
                    }

                    $('.aside .item a').removeClass('on');
                    $('.aside .item a').eq(num).addClass('on');

                    $('.menu li a').removeClass('on');
                    $('.menu li a').eq(num).addClass('on');

                    $('.mob_menu li a').removeClass('on');
                    $('.mob_menu li a').eq(num).addClass('on');
                }); //$(".section").animate(
            }); //$("html body").on

            //click event
            $('.nav .menu li a, .mob_nav .mob_menu li a, .aside .item a').click(function () {
                num = $(this).parent().index();
                console.log('num : ', num);

                $('.aside .item a').removeClass('on');
                $('.aside .item a').eq(num).addClass('on');

                $('.menu li a').removeClass('on');
                $('.menu li a').eq(num).addClass('on');

                $('.mob_menu li a').removeClass('on');
                $('.mob_menu li a').eq(num).addClass('on');

                var t = -1 * num * window.innerHeight;

                $('.section').animate({ top: t + 'px' }, 500);

                if (num != 0) {
                    $('.header .nav').addClass('on');
                } else {
                    $('.header .nav').removeClass('on');
                }
            }); //$(".nav .menu li a,, .mob_menu li a aside .item a").click

            $('#scrollArrow').click(function () {
                n = $(this).parent().index();
                num = n + 1;
                console.log('num : ', num);

                $('.aside .item a').removeClass('on');
                $('.aside .item a').eq(num).addClass('on');

                $('.menu li a').removeClass('on');
                $('.menu li a').eq(num).addClass('on');

                $('.mob_menu li a').removeClass('on');
                $('.mob_menu li a').eq(num).addClass('on');

                var t = -1 * num * window.innerHeight;

                $('.section').animate({ top: t + 'px' }, 500);

                if (num != 0) {
                    $('.header .nav').addClass('on');
                } else {
                    $('.header .nav').removeClass('on');
                }
            }); //$('#scrollArrow').click

            //keyboard event
            $(window).keydown(function (e) {
                if (moving == false) {
                    moving = true;

                    var t = $('.section').offset().top;
                    var h = window.innerHeight;

                    if (e.keyCode == 40) {
                        if (num < 4) {
                            num++;
                            t -= h;
                        }
                    } else if (e.keyCode == 38) {
                        if (num > 0) {
                            num--;
                            t += h;
                        }
                    }

                    $('.section').animate({ top: t + 'px' }, 500, function () {
                        moving = false;
                        if (num != 0) {
                            $('.header .nav').addClass('on');
                            // $('.mob_header .mob_nav').addClass('on');
                        } else {
                            $('.header .nav').removeClass('on');
                            // $('.mob_header .mob_nav').removeClass('on');
                        }
                        $('.aside .item').removeClass('on');
                        $('.aside .item').eq(num).addClass('on');
                    }); //$(".section").animate
                } //if(moving==false)
            }); //$(window).keydown
        } else {
        }
    });

    var num = 0; //page
    var moving = false;

    function inlayout() {
        var t = -1 * num * window.innerHeight; //내 윈도우 높이만큼 페이지를 -로 조정
        $('.section').css({ top: t + 'px' });
        $('.section .page').css({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        $('.section .page').removeClass('loading');
        $('.aside .item').removeClass('on');
        $('.aside .item').eq(num).addClass('on');
    } //inlayout

    inlayout();

    function dolayout() {
        var t = -1 * num * window.innerHeight;
        $('.section').css({ top: t + 'px' });
        $('.section .page').css({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    } //dolayout

    //resize event
    $(window).resize(function () {
        dolayout();
    }); //$(window).resize

    //mousewheel event
    $('html body').on('mousewheel DOMMouseScroll', function (e) {
        console.log('wheelDelta : ', e.originalEvent.wheelDelta); //Chrome down -120, up 120
        console.log('detail : ', e.originalEvent.detail); //Firefox down 3, up -3

        if (moving == false) {
            moving = true;
            var t = $('.section').offset().top;
            var h = window.innerHeight;

            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                //up
                if (num > 0) {
                    num--;
                    t += h; //t = t + h
                }
            } else if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
                //down
                if (num < 4) {
                    num++;
                    t -= h;
                }
            }
        } //if(moving==false)

        $('.section').animate({ top: t }, 500, function () {
            moving = false;

            if (num != 0) {
                $('.header .nav').addClass('on');
                // $('.mob_header .mob_nav').addClass('on');
            } else {
                $('.header .nav').removeClass('on');
                // $('.mob_header .mob_nav').removeClass('on');
            }

            $('.aside .item a').removeClass('on');
            $('.aside .item a').eq(num).addClass('on');

            $('.menu li a').removeClass('on');
            $('.menu li a').eq(num).addClass('on');

            $('.mob_menu li a').removeClass('on');
            $('.mob_menu li a').eq(num).addClass('on');
        }); //$(".section").animate(
    }); //$("html body").on

    //click event
    $('.nav .menu li a, .mob_nav .mob_menu li a, .aside .item a').click(function () {
        num = $(this).parent().index();
        console.log('num : ', num);

        $('.aside .item a').removeClass('on');
        $('.aside .item a').eq(num).addClass('on');

        $('.menu li a').removeClass('on');
        $('.menu li a').eq(num).addClass('on');

        $('.mob_menu li a').removeClass('on');
        $('.mob_menu li a').eq(num).addClass('on');

        var t = -1 * num * window.innerHeight;

        $('.section').animate({ top: t + 'px' }, 500);

        if (num != 0) {
            $('.header .nav').addClass('on');
        } else {
            $('.header .nav').removeClass('on');
        }
    }); //$(".nav .menu li a,, .mob_menu li a aside .item a").click

    $('#scrollArrow').click(function () {
        n = $(this).parent().index();
        num = n + 1;
        console.log('num : ', num);

        $('.aside .item a').removeClass('on');
        $('.aside .item a').eq(num).addClass('on');

        $('.menu li a').removeClass('on');
        $('.menu li a').eq(num).addClass('on');

        $('.mob_menu li a').removeClass('on');
        $('.mob_menu li a').eq(num).addClass('on');

        var t = -1 * num * window.innerHeight;

        $('.section').animate({ top: t + 'px' }, 500);

        if (num != 0) {
            $('.header .nav').addClass('on');
        } else {
            $('.header .nav').removeClass('on');
        }
    }); //$('#scrollArrow').click

    //keyboard event
    $(window).keydown(function (e) {
        if (moving == false) {
            moving = true;

            var t = $('.section').offset().top;
            var h = window.innerHeight;

            if (e.keyCode == 40) {
                if (num < 4) {
                    num++;
                    t -= h;
                }
            } else if (e.keyCode == 38) {
                if (num > 0) {
                    num--;
                    t += h;
                }
            }

            $('.section').animate({ top: t + 'px' }, 500, function () {
                moving = false;
                if (num != 0) {
                    $('.header .nav').addClass('on');
                    // $('.mob_header .mob_nav').addClass('on');
                } else {
                    $('.header .nav').removeClass('on');
                    // $('.mob_header .mob_nav').removeClass('on');
                }
                $('.aside .item').removeClass('on');
                $('.aside .item').eq(num).addClass('on');
            }); //$(".section").animate
        } //if(moving==false)
    }); //$(window).keydown
    // });
}); //jqfn_onepage-scroll

$(function () {
    //.menuList-sub show/hide
    var h = window.innerHeight;
    console.log(h);

    if (h < 700) {
        $('.menuList-sub__img').eq(2).hide();
        $('.menuList-sub__text').eq(2).hide();
    } else if (h < 800) {
        $('.page-left-sub__text span, .page-right-sub__text span').hide();
    } else {
        $('.menuList-sub__img').eq(2).show();
        $('.menuList-sub__text').eq(2).show();

        $('.page-left-sub__text span, .page-right-sub__text span').show();
    }
}); //.menuList-sub show/hide_end

$(function () {
    $('.burger svg')
        .eq(0)
        .click(function () {
            $(this).hide().siblings().show();
            // $('.mob_head-bg').animate({ top: '-150px' }, 200);
            $('.mob_nav').addClass('on');
        });

    $('.burger svg')
        .eq(1)
        .click(function () {
            $(this).hide().siblings().show();
            // $('.mob_head-bg').animate({ top: '-500px' }, 200);
            $('.mob_nav').removeClass('on');
        });
}); //burger click fn

$(function () {
    $('.mob_menu li a').click(function () {
        $('.mob_nav').removeClass('on');
        $('.burger svg').eq(0).show().siblings().hide();
    });
}); //mob_menu li click fn

$(function () {
    $('textarea').textinput({
        autogrow: false,
    });
}); // textarea autogrow
