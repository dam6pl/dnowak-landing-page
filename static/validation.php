<?php

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    $captchaSecret = $_ENV['api_key'];
    $captchaToken = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_STRING);
    $captchaResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$captchaSecret}&response={$captchaToken}");
    $captchaResponse = json_decode($captchaResponse, true);

    if ($captchaResponse['success'] === 1 && $captchaResponse['action'] === $_POST['action']) {
        require_once 'email-template.php';
        $content = ob_get_clean();

        mail(
            'me@dnowak.dev',
            'Formularz kontaktowy - dnowak.dev',
            $content,
            "From: no-reply@dnowak.dev\r\nContent-type: text/html; charset=utf8"
        );
    }

    echo $captchaResponse['success'];

    die();
}