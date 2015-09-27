$(document).ready(function() {
    $('.is-email').each(function () {
        if (typeof $(this).data('mailbox') !== undefined &&
                typeof $(this).data('domain') !== undefined) {
            var email = $(this).data('mailbox') + '@' + $(this).data('domain');
            $(this).attr('href', 'mailto:' + email);
        }
    });
    $('.has-email').each(function () {
        if (typeof $(this).data('mailbox') !== undefined &&
                typeof $(this).data('domain') !== undefined) {
            var email = $(this).data('mailbox') + '@' + $(this).data('domain');
            $(this).find('.fill-in-email').text(email);
        }
    });
});
