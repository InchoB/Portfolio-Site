$(function() {
    var n = 0;
    var len = $('.slideImg img').length;
    var w = -1180;

    var current = 0;
    $('.banBtn li')
        .eq(0)
        .addClass('on');

    var moveImg = false;

    var id = setInterval(move, 4000);

    $('.banBtn').hover(
        function() {
            clearInterval(id);
        },
        function() {
            var id = setInterval(move, 4000);
        }
    );

    function move() {
        if (current < 5) {
            current += 1;
        } else {
            current = 0;
        }

        $('.slideImg').animate({ left: current * w + 'px' }, 500);
        $('.banBtn li')
            .eq(current)
            .addClass('on')
            .siblings()
            .removeClass('on');
    }

    $('.banBtn li').click(function() {
        current = $(this).index();
        if (moveImg == false) {
            clearInterval(id);
            moveImg = true;

            $(this)
                .addClass('on')
                .siblings()
                .removeClass('on');
            console.log(current);
            $('.slideImg').animate({ left: current * w + 'px' }, 500);
            n++;
        } else {
            moveImg = false;
        }
    });
});

// $(function() {
//     var timer = setInterval(function() {
//         $('.slideList > .slideImg').animate({ left: '-100%' }, 600, function() {
//             $('.slideList > .slideImg').append($('.slideList > .slideImg div').first());
//             $('.slideList > .slideImg').css({ left: 0 });
//         });
//     }, 4000); // banner
// });
// // main banner
