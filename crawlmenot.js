/* https://github.com/daiconrad/crawlmenot */
document.addEventListener('DOMContentLoaded', function() {
    var i, j, email, hasemail, fillin, isemail = document.querySelectorAll('.is-email');
    for (i = 0; i < isemail.length; ++i) {
        if (typeof isemail[i].dataset.mailbox !== undefined &&
                typeof isemail[i].dataset.domain !== undefined) {
            email = isemail[i].dataset.mailbox + '@' + isemail[i].dataset.domain;
            isemail[i].href = 'mailto:' + email;
        }
    }
    hasemail = document.querySelectorAll('.has-email');
    for (i = 0; i < hasemail.length; ++i) {
        if (typeof hasemail[i].dataset.mailbox !== undefined &&
                typeof hasemail[i].dataset.domain !== undefined) {
            email = hasemail[i].dataset.mailbox + '@' + hasemail[i].dataset.domain;
            fillin = hasemail[i].querySelectorAll('.fill-in-email');
            for (j = 0; j < fillin.length; ++j) {
                fillin[j].innerHTML = email;
            }
        }
    }
});
