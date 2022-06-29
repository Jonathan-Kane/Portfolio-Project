$(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 70) {
            $(".navbar").addClass("bg-light");
        } else {
          $(".navbar").removeClass("bg-light");
        }
    });
});