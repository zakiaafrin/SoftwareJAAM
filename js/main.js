$(document).ready(function () {

    // Home Button visibility
    $(".cta").css({ "opacity": "0" })
    $(window).scroll(function () {
        if ($(this).scrollTop() < 200) {
            $(".homebtn").removeClass("cta")
        }
        else {
            $(".homebtn").addClass("cta")
        }
    })


    // Active nav-link highlighted
    $('a.nav-link').click(function () {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
    })


})