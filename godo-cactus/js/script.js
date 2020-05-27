$(function () {
    let $mobileSlideImg = $('.top-slide-banner__mobile img');
    let n = 0;
    $mobileSlideImg.hide();
    $mobileSlideImg.eq(n - 1).show();
    let mobileSlide = setInterval(function () {
        if (n < $mobileSlideImg.length - 1) {
            n++;
        } else {
            n = 0;
        }
        $mobileSlideImg.eq(n - 1).fadeOut(500);
        $mobileSlideImg.eq(n).fadeIn(500);
    }, 2000);
}); // .top-slide-banner

$(function () {
    $('.header__search').hide();

    // $('.header__search-icon').click(function (e) {
    //     e.preventDefault();

    let close = 'img/icon-x.png';
    let search = 'img/m_icon_sch.png';

    $('.header__search-icon').click(function () {
        if ($(this).find('img').attr('src', search)) {
            console.log($(this));
            $(this).find('img').attr('src', close);
        } else if ($(this).find('img').attr('src', close)) {
            $(this).find('img').attr('src', search);
        }
    });

    $('.header__search__form__inner__recent__close').click(function () {
        $('.header__search').hide();
    });
});
