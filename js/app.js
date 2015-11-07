function init(showContactForm, failureCount, mailSent) {

    if (showContactForm == true) {
        location.href = "#contact";
    }

    $('#show_popup').leanModal({ closeButton: ".modal-close" });

    if (failureCount > 0 || mailSent == true) {
        $('#show_popup').click();
    }
}

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});