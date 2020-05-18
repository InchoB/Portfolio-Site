$(function() {
    $('header').hide();

    $(window).scrollTop(0);
    $(window).scroll(function() {
        var scrolltop = document.body.scrollTop;
        var scrolltop2 = document.documentElement.scrollTop;

        if (scrolltop > 10 || scrolltop2 > 10) {
            $('#header').slideDown();
            $('#header .nav ul li').slideDown();
        } else {
            $('#header').slideUp();
            $('#header .nav .menu li').slideUp();
        }

        if (scrolltop >= 500 || scrolltop2 >= 500) {
            $('#scrollArrow')
                .stop()
                .animate(
                    {
                        opacity: '0'
                    },
                    1000
                )
                .hide();
        } else {
            $('#scrollArrow')
                .stop()
                .animate(
                    {
                        opacity: '1'
                    },
                    1000
                )
                .show();
        }
    });

    //header 효과 끝

    // #scrollArrow - click event
    $('.control1').click(function() {
        $(window).scrollTop(2200);
    });

    $('.control2').click(function() {
        $(window).scrollTop(1424);
    });

    $('.control3').click(function() {
        $(window).scrollTop(3644);
    });
    // #scrollArrow - click event_end
    console.log($(document).scrollTop());

    var i = 0;

    $('.contents >div').hover(
        function() {
            //        var conNum = $(this).attr("class").substr(3,1)
            //        console.log(conNum);

            $(this)
                .find('.gallery')
                .addClass('on');
            $(this)
                .find('.text')
                .addClass('on');
            i = 0;
        },
        function() {
            $(this)
                .find('.gallery')
                .removeClass('on');
            $(this)
                .find('.text')
                .removeClass('on');
            i = 1;
            //            $(this).children(".text").css({"width":"40%"})
        }
    );

    $('.text h3').click(function(e) {
        if (i == 0) {
            e.preventDefault();
            //            console.log(5);
            $(this)
                .siblings()
                .addClass('howb');
            $('.contents >div').mouseleave(function() {});
        } else {
            //            return;
        }
    });

    $('.text h3').hover(
        function() {
            $(this)
                .css({
                    width: '500px',
                    'text-decoration': 'underline',
                    'box-shadow': '0px -3px 3px black'
                })
                .siblings()
                .css({
                    opacity: '0.5',
                    'text-decoration': 'none',
                    'box-shadow': 'none'
                });
        },
        function() {
            $(this)
                .css({
                    width: '300px',
                    'text-decoration': 'none',
                    'box-shadow': 'none'
                })
                .siblings()
                .css({
                    opacity: '1'
                });
        }
    );

    $('.text h3').click(function() {
        var img = $();
        // 일단 이미지 인덱스 번호 가져오기
        // 포지션 앱솔 잡아서 한곳에 몰아넣고 attr 로 src 속성 가져와서 이미지 변경하기

        var text = $();
        // 택스트도 앱솔잡아서 한곳에 몰아 넣고 화면값 조정,폰트조정하기.

        var conover = $('contents > div').hover();

        if (conover == true) {
            $(this)
                .find('.gallery')
                .addClass('on');
            $(this)
                .find('.text')
                .addClass('on');
        } else {
            $(this)
                .find('.gallery')
                .removeClass('on');
            $(this)
                .find('.text')
                .removeClass('on');
        }

        $(this)
            .parent()
            .toggleClass('hov');
    });

    $('.contents > div> .text > h3> a').click(function() {
        var $bgi = $(this)
            .parents('.contents')
            .children('div');
        //        console.log($bgi)
        var bgurl = $(this).attr('conbg');
        //        $bgi.css({"background":"url(img/con3b1.jpg)"})

        //        $bgi.css({"backgound-size":"60%"});
        $bgi.css({ background: bgurl });
    });

    var $coname = $('.contents > div')
        .attr('class')
        .substr(0, 3);
    // console.log($coname);
});
