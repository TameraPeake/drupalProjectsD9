<?php

/**
 * 
 * This file works with dotenv (npm package) to help protect your db information
 * It takes the db hos, name, etc from the .env file and saves it into a variable that's passed through 
 * the required function (my best guess)
 * 
 * This file is included very early. See autoload.files in composer.json and
 * https://getcomposer.org/doc/04-schema.md#files
 */

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();
$dotenv->required(['DATABASE_HOST', 'DATABASE_NAME', 'DATABASE_USER', 'DATABASE_PASSWORD', 'ENVIRONMENT']);
