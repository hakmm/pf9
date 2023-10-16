$(function() {
    $('.toggle-menu').click (function(){
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
    });

    $(".gnb > li > a").clone().appendTo("#menu .main-nav");

    $(".main-nav").contents().wrapAll("<div></div>");

    $(".main-nav div a").wrap("<li></li>");

    $(".main-nav div li").wrapAll("<ul></ul>");

    $(".main-nav div li").contents().wrap("<div></div>");

    for(let i=0;i<4;i++) {
        $(".main-nav ul li:eq("+i+") a").after("<i class='ion-chevron-down'></i>");
    }

    var a = 0;
    var n;
    var n2;
    $(".main-nav ul li").mouseenter(function(){
        n = $(this).index()+1;
    });

    $(".main-nav ul li div i").click(function(){
        $("#menu .main-nav ul li > ul").remove();
        var clone = $(".wsub:nth-child("+n+") > div > ul li:nth-child(1)").clone();
        var appendTo = clone.appendTo("#menu .main-nav ul li:nth-child("+n+")");
        appendTo.slideToggle();
        $("#menu .main-nav ul li > li").wrapAll("<ul></ul>");
        if (a==0) {
            $(this).attr("class","ion-chevron-up");
            a=1;
            n2=n;
        } else {
            if (n==n2) {
                $(this).attr("class","ion-chevron-down");
                $(this).parents("li").find("ul").css("display","none");
                a=0;
            } else {
                $(this).attr("class","ion-chevron-up");
                n2=n;
            }
        }
        $(this).parents("li").siblings().find("ul").slideUp();
        $(this).parents("li").siblings().find("i").attr("class","ion-chevron-down"); 
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