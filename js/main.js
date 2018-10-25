$(document).ready(function () {


    $('.questions__list li').click(function () {
        if (window.innerWidth <= 768) {
            $(this).children('.questions__answer').toggleClass('active');
        }
    });

    $('.recall__list').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        navText: false,
        nav: true
    });

    $('.profit__list').owlCarousel({
        loop: false,
        mouseDrag: false,
        margin: 10,
        responsiveClass: true,
        navText: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            769: {
                items: 2,
                nav: false
            }
        }
    });

    $('.navigated').click(function (e) {
        e.preventDefault();
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000, {
            offset: 0
        });
        return false;
    });

});