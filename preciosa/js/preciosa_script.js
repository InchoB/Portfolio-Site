$(function() {
    var num = 0; //page
    var moving = false;
    var selectedPage = false;
    var pageOffset = 0;
    var topOffset = 0;

    function inlayout() {
        var t = -1 * num * window.innerHeight; //내 윈도우 높이만큼 페이지를 -로 조정
        $('scroll-container').css({ top: t + 'px' });
        $('scroll-container .scroll').css({
            width: window.innerWidth,
            height: window.innerHeight
        });
        $('scroll-container .scroll').removeClass('loading');
        $('.box .btn').removeClass('on');
        $('.box .btn')
            .eq(num)
            .addClass('on');
    } //inlayout

    inlayout();

    function dolayout() {
        var t = -1 * num * window.innerHeight;
        $('scroll-container').css({ top: t + 'px' });
        $('scroll-container .scroll').css({
            width: window.innerWidth,
            height: window.innerHeight
        });
    } //dolayout

    function onSelectMenu() {
        topOffset = Math.abs($('#contents1').offset().top);
        pageOffset = window.innerHeight;

        selectedPage = false;
        var btnClass = $('.box .btn');
        var arrNumber = new Array();

        $(btnClass.get().reverse()).each(function(index) {
            arrNumber[index] = Math.abs(topOffset - pageOffset * index);
            console.log('index : ' + index + ' / ' + arrNumber[index]);
        });

        var minIndex = 0;
        var minNum = arrNumber[0];
        for (var i = 1; i < arrNumber.length; i++) {
            if (minNum > arrNumber[i]) {
                minNum = arrNumber[i];
                minIndex = i;
            }
        }

        for (var i = 0; i < arrNumber.length; i++) {
            if (i == minIndex) {
                $('.box .btn')
                    .eq(i)
                    .addClass('on');
            } else {
                $('.box .btn')
                    .eq(i)
                    .removeClass('on');
            }
        }
    }

    //resize event
    $(window).resize(function() {
        dolayout();
    }); //$(window).resize

    //mousewheel event
    $('html body').on('mousewheel DOMMouseScroll', function(e) {
        console.log(e.originalEvent.wheelDelta); //Chrome down -120, up 120
        //console.log(e.originalEvent.detail); //Firefox down 3, up -3

        // if (moving == false) {
        //     moving = true;
        //     var t = $('scroll-container').offset().top;
        //     var h = window.innerHeight;

        //     if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        //         //up
        //         if (num > 0) {
        //             num--;
        //             t += h; //t = t + h
        //         }
        //     } else if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
        //         //down
        //         if (num < 4) {
        //             num++;
        //             t -= h;
        //         }
        //     }
        // }

        onSelectMenu();
    }); //$("html body").on

    function onTopMenu() {
        $('.box .btn')
            .eq(0)
            .click();
    }

    function onDownMenu() {
        $('.box .btn')
            .eq(4)
            .click();
    }
    //click event
    $('.box .btn').click(function() {
        num = $(this)
            .parent('a')
            .index();
        console.log('num : ', num);
        $('.box .btn').removeClass('on');
        $('.box .btn')
            .eq(num - 1)
            .addClass('on');

        var t = -1 * num * window.innerHeight;

        $('scroll-container').animate({ top: t + 'px' }, 500);
    }); //$(".nav .menu a, aside .item a").click

    //keyboard event
    $(window).keydown(function(e) {
        if (moving == false) {
            moving = true;

            var t = $('scroll-container').offset().top;
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

            $('scroll-container').animate({ top: t + 'px' }, 500, function() {
                moving = false;
                if (num != 0) {
                    $('#header .nav').addClass('on');
                } else {
                    $('#header .nav').removeClass('on');
                }
                $('.box .btn').removeClass('on');
                $('.box .btn')
                    .eq(num)
                    .addClass('on');
            }); //$("scroll-container").animate
        } //if(moving==false)
    }); //$(window).keydown

    // $(window).on('scroll', function() {
    //     $('.scroll-container .scroll').each(function() {
    //         console.log("inner srcroll : "+($(window).scrollTop()) +","
    //         +($(this).offset().top));
    //         if($(window).scrollTop() >= $(this).offset().top) {
    //             var id = $(this).attr('id');
    //             $('.box .btn').removeClass('on');
    //             $('.box .btn').eq(num).addClass('on');
    //             console.log("inner");
    //         }

    //     });
    // });
}); //jqfne

$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        // console.log('scroll:', scroll);
        if (scroll >= 25) {
            // console.log('a');
            $('#footer .foot_bdr').addClass('start');
            $('#footer .foot_bdr2').addClass('start');
        } else {
            $('#footer .foot_bdr').removeClass('start');
            $('#footer .foot_bdr2').removeClass('start');
        }
    });
});
