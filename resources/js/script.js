$(document).ready(function () {

    $('.js--scroll-to-art').click(function () {
        $('html, body').animate({
            scrollTop: $('#art').offset().top - 10
        }, 1000);
    });

    $('.js--scroll-to-artist').click(function () {
        $('html, body').animate({
            scrollTop: $('#artist').offset().top - 23
        }, 1000);
    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 23
                    }, 1000);
                    return false;
                }
            }
        });
    });

});