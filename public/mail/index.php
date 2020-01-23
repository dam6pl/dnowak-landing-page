<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Allow');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

if (!($data->name ?? false) || !($data->email ?? false) || !($data->message ?? false)) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die();
}

$name = filter_var($data->name, FILTER_SANITIZE_STRING);
$email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$phone = filter_var($data->phone ?? '', FILTER_SANITIZE_STRING);
$message = filter_var($data->message, FILTER_SANITIZE_STRING);

ob_start();
require_once 'email-template.php';
$content = ob_get_clean();

mail(
    'me@dnowak.dev',
    'Formularz kontaktowy - dnowak.dev',
    $content,
    "From: no-reply@dnowak.dev\r\nContent-type: text/html; charset=utf8"
);
