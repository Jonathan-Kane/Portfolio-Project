$(function() {
    $(window).on('scroll', function() {    
        let scroll = $(window).scrollTop();
        if (scroll >= 70) {
            $(".navbar").css("background-color", "rgb(220, 220, 220)");
        } else {
            $(".navbar").css("background-color", "");
        }
    });
});