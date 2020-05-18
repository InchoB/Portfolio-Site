$(function() {
    // draggable magnet effect
    $('.drag').draggable({
        containment: '#draggable',
        snap: true,
        snapMode: 'both'
    });

    $('input').click(function() {
        $('.drag').draggable('option', 'snapMode', $(this).val());
        $('#info').html($(this).val());
    });
    // draggable magnet effect _end

    // img download event
    $('#save').click(function() {
        html2canvas($('.downloadImage'), {
            onrendered: function(canvas) {
                canvas.toBlob(function(blob) {
                    saveAs(blob, 'image.jpg');
                });
            }
        });
    });
    // img download event _end

    // bgColor change
    $('.bg1').click(function() {
        $('.mainImgBg').css({ backgroundColor: '#fff' });
        $('h1').css({ color: '#000' });
    });
    $('.bg2').click(function() {
        $('.mainImgBg').css({ backgroundColor: '#000' });
        $('h1').css({ color: '#fff' });
    });
    $('.bg3').click(function() {
        $('.mainImgBg').css({ backgroundColor: 'pink' });
        $('h1').css({ color: 'crimson' });
    });
    $('.bg4').click(function() {
        $('.mainImgBg').css({ backgroundColor: 'skyblue' });
        $('h1').css({ color: 'navy' });
    });
    $('.bg5').click(function() {
        $('.mainImgBg').css({ backgroundColor: 'rgba(100, 200, 130, 1)' });
        $('h1').css({ color: 'darkgreen' });
    });
    //bgColor change _end

    var pos = function positon() {
        $('#draggable img')
            .eq(0)
            .css({ top: '450px', left: '50px' });
    };

    //sample click event
    var n = 0;
    n++;
    $('.samImg img').click(function() {
        $('#draggable img').removeClass('on');
        $('#draggable img').addClass('off');

        var num = $(this).index();
        if (n < 11) {
            n++;
        } else {
            n = 0;
        }
        // console.log(num);

        if (num == 0) {
            $('#draggable img')
                .eq(0)
                .addClass('on');
            $('#draggable img')
                .eq(1)
                .addClass('on');
            $('#draggable img')
                .eq(6)
                .addClass('on');
        } else if (num == 1) {
            $('#draggable img')
                .eq(2)
                .addClass('on');
        } else if (num == 2) {
            $('#draggable img')
                .eq(3)
                .addClass('on');
        } else if (num == 3) {
            $('#draggable img')
                .eq(4)
                .addClass('on');
            $('#draggable img')
                .eq(5)
                .addClass('on');
        } else if (num == 4) {
            $('#draggable img')
                .eq(7)
                .addClass('on');
        } else if (num == 5) {
            $('#draggable img')
                .eq(8)
                .addClass('on');
        } else if (num == 6) {
            $('#draggable img')
                .eq(9)
                .addClass('on');
        } else if (num == 7) {
            $('#draggable img')
                .eq(10)
                .addClass('on');
            $('#draggable img')
                .eq(11)
                .addClass('on');
        } else if (num == 8) {
            $('#draggable img')
                .eq(12)
                .addClass('on');
        } else if (num == 9) {
            $('#draggable img')
                .eq(13)
                .addClass('on');
            $('#draggable img')
                .eq(14)
                .addClass('on');
        } else if (num == 10) {
            $('#draggable img')
                .eq(15)
                .addClass('on');
            $('#draggable img')
                .eq(16)
                .addClass('on');
        } else if (num == 11) {
            $('#draggable img')
                .eq(17)
                .addClass('on');
            $('#draggable img')
                .eq(18)
                .addClass('on');
            $('#draggable img')
                .eq(19)
                .addClass('on');
        }
    });
    //sample click event _end
}); //$(function() {})
