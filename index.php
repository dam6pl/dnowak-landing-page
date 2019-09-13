<?php
require_once 'static/validation.php';
require_once 'static/language.php';
?>

<html lang="<?= $language ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Damian Nowak - PHP Developer</title>
    <meta name="description"
          content="<?= __('Projektowanie stron internetowych, serwisów firmowych i portali oraz tworzenie skutecznych sklepów internetowych w oparciu o CMS WordPress.',
              'Designing websites, company websites and portals and creating effective online stores based on CMS WordPress.') ?>">
    <meta name="keywords" content="wordpress, strona internetowa, sklep, blog, usługi informatyczne, cms">
    <meta name="author" content="Damian Nowak">

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <link href="/static/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/css/fontawesome.min.css" rel="stylesheet">
    <link href="/static/css/pace.min.css" rel="stylesheet">
    <link href="/static/css/style.css" rel="stylesheet">

    <script src="/static/js/pace.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js?render=6LelXLgUAAAAANdJ9h5jZqn8Rq2JCDdMHuXbOBgw'></script>
</head>
<body>

<main class="container">
    <div class="row language">
        <div class="col-12">
            <h1><?= __('<span>Cześć! Jestem Damian,</span> po prostu przywitaj się.',
                    '<span>Hi! I\'m Damian,</span> just say hello.') ?></h1>
        </div>
        <div class="language-switcher">
            <a href="?lang=<?= $language === 'pl' ? 'en' : 'pl' ?>">
                <img src="static/img/<?= $language === 'pl' ? 'en' : 'pl' ?>.svg"
                     alt="<?= $language === 'pl' ? 'en' : 'pl' ?>">
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-12 my-3">
            <p><?= __('Skontaktuj się ze mna. Zawsze jestem otwarty na dyskusję o nowych projektach, kreatywnych pomysłach lub możliwościach, aby być częścią Twoich wizji.',
                    'Contact me. I am always open to discussions about new projects, creative ideas or opportunities to be part of your visions.') ?></p>

            <div class="row">
                <div class="col-12 col-sm-6 col-lg-12 contact mt-3 mt-lg-4">
                    <h4><?= __('Potrzebujesz pomocy?', 'Need help?') ?></h4>
                    <a href="mailto:me@dnowak.dev">me@dnowak.dev</a>
                </div>

                <div class="col-12 col-sm-6 col-lg-12 contact mt-3 mt-lg-4">
                    <h4><?= __('Porozmawiajmy o Twoim pomyśle', 'Let\'s talk about your idea') ?></h4>
                    <a href="tel:+48535946118">+48 535 946 118</a>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-12 mt-3">
            <form action="#" method="post" id="contact">
                <fieldset>
                    <input type="text" id="name" name="name" required>
                    <label for="name"><?= __('Imię i nazwisko', 'Name') ?> *</label>
                </fieldset>

                <fieldset>
                    <input type="email" id="email" name="email" required>
                    <label for="email"><?= __('Adres email', 'Email') ?> *</label>
                </fieldset>

                <fieldset>
                    <input type="text" id="phone" name="phone">
                    <label for="phone"><?= __('Numer telefonu', 'Phone number') ?></label>
                </fieldset>

                <fieldset>
                    <textarea id="message" rows="5" name="message" required></textarea>
                    <label for="message"><?= __('Wiadomość', 'Message') ?> *</label>
                </fieldset>

                <button type="submit"><?= __('Wyślij wiadomość', 'Send') ?></button>
                <div class="return-message">
                    <span class="success d-none"><?= __('Wiadomość została wysłana!',
                            'The message has been send!') ?></span>
                    <span class="error d-none"><?= __('Wiadomość nie została wysłana! Spróbuj ponownie!',
                            'The message has not been sent! Try again!') ?></span>
                </div>
            </form>
        </div>
    </div>

    <div class="row">
        <div class="col-12 mt-4 mt-lg-0">
            <div class="icons my-3 mt-lg-5 pt-lg-5">
                <a target="_blank" href="https://www.facebook.com/damiannowak42"><i class="fab fa-facebook-square"></i></a>
                <a target="_blank" href="http://instagram.com/dam6pl"><i class="fab fa-instagram"></i></a>
                <a target="_blank" href="http://github.com/dam6pl"><i class="fab fa-github-square"></i></a>
                <a target="_blank" href="http://linkedin.com/in/damiannowak42"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</main>

<!--JS Scripts-->
<script src="/static/js/jquery.min.js"></script>
<script src="/static/js/script.js"></script>
</body>
</html>