// Home Button visibility
$(document).ready(function () {

    $(".cta").css({ "opacity": "0" })
    $(window).scroll(function () {
        if ($(this).scrollTop() < 200) {
            $(".homebtn").removeClass("cta")
        }
        else {
            $(".homebtn").addClass("cta")
        }
    })
})
