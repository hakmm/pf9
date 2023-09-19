$(function() {
    $('.toggle-menu').click (function(){
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
    });

    $('.list').slick({
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    //     // autoplay: true,
    //     // autoplaySpeed : 1500,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 720,
                settings: 'unslick'
            }
        ]
    });

    $(window).on('resize', function() {
        $('.list').slick('resize');
    });
});