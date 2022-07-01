$(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 70) {
            $(".navbar").css("background-color", "rgb(220, 220, 220)");
        } else {
            $(".navbar").css("background-color", "");
        }
    });
});