"use strict";
(function ($) {

    var $form = $('form');

    grecaptcha.ready(function () {
        grecaptcha.execute('6LelXLgUAAAAANdJ9h5jZqn8Rq2JCDdMHuXbOBgw', { action: 'contact_form' }).then(function (token) {
            $form.prepend('<input type="hidden" name="token" value="' + token + '">');
            $form.prepend('<input type="hidden" name="action" value="contact_form">');
        });
    });

    $form.on('submit', function (e) {
        e.preventDefault();

        var formValues = $(this).serializeArray();

        Pace.track(function () {
            $.ajax({
                type: 'POST',
                url: "",
                data: formValues
            }).done(function (response) {
                $form.trigger('reset');

                if (response === '1') {
                    $('.return-message span.success').removeClass('d-none');
                    setTimeout(function () {
                        $('.return-message span.success').addClass('d-none');
                    }, 5000);
                } else {
                    $('.return-message span.error').removeClass('d-none');
                    setTimeout(function () {
                        $('.return-message span.error').addClass('d-none');
                    }, 5000);
                }
            });
        });
    });

})(jQuery);