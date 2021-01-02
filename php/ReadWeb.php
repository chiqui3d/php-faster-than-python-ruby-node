<?php
$start = microtime(true);
$site = 'https://www.google.com/';
$readSite = file_get_contents($site);
$strLen = strlen($readSite);
print $strLen.PHP_EOL;
print microtime(true) - $start;
