$(function() {
    var id = setInterval(move, 3000);
    function move() {
        $('.thmImg').animate({ top: '-=' + '142px' }, 1000, function() {
            $('.thmImg').append($('.thmImg img').first());
            $('.thmImg').css({ top: 0 });
        });
    }

    $('.thmImg a').click(function(e) {
        e.preventDefault();
    });

    // $('.thmImg a').click(function() {
    //     var imgattr = $(this).attr('href');
    //     $('#largeImg img').attr({ src: imgattr });
    // });

    var largeId = setInterval(largeMove, 3000);
    $('.imgwrap img').hide();

    $('.imgwrap img')
        .eq(0)
        .show();

    var n = 0;
    function largeMove() {
        if (n < 11) {
            n++;
        } else {
            n = 0;
        }
        $('.imgwrap')
            .find('img')
            .eq(0)
            .fadeOut(500);
        $('.imgwrap')
            .find('img')
            .eq(n - 1)
            .fadeOut(500);
        $('.imgwrap')
            .find('img')
            .eq(n)
            .fadeIn(500);
    }
    // $('#thumbs, .imgwrap').hover(
    //     function() {
    //         clearInterval(move);
    //         clearInterval(largeMove);
    //     },
    //     function() {
    //         id = setInterval(move, 2000);
    //         largeId = setInterval(move, 2000);
    //     }
    // );
}); //$(function() {})
