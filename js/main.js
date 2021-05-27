$(function () {
    $('#nav-tgl').on('change', function () {
        var st = $(window).scrollTop();
        if ($(this).prop("checked") == true) {
            // $('html').addClass('scroll-prevent');
            // $('html').css('top', -(st) + 'px');
            // $('html').css('top', +(st) + 'px');
            // $('#nav-tgl').on('change', function () {
            //     if ($(this).prop("checked") !== true) {
            //         $('html').removeClass('scroll-prevent');
            //         $(window).scrollTop(st);


            //     }
            // });
            (function() {
                // スクロールを禁止する関数
                function noScroll(event) {
                  event.preventDefault();
                }
               // スクロール禁止(SP)
               document.addEventListener('touchmove', noScroll, { passive: false });
               // スクロール禁止(PC)
             
               document.addEventListener('mousewheel', noScroll, { passive: false });
               // スクロール禁止を解除(SP)
               document.removeEventListener('touchmove', noScroll, { passive: false });
               // スクロール禁止を解除(PC)
               document.removeEventListener('mousewheel', noScroll, { passive: false });
             })();
        }
    });
})


$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        let scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            let targetPosition = $(this).offset().top;
            if (scrollAmount > targetPosition - wHeight + 5) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});


$(function () {
    $('a[href^="#"]').click(function () {
        let speed = 500;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});


$(function () {
    $("img").on("contextmenu", function (e) {
        return false;
    });
});

