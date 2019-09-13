<?php

global $language;
$language = isset($_GET['lang']) && $_GET['lang'] === 'en' ? 'en' : 'pl';

/**
 * Get translated text.
 *
 * @param string $text1
 * @param string $text2
 *
 * @return string
 */
function __(string $text1, string $text2): string
{
    global $language;
    return $language === 'pl' ? $text1 : $text2;
}