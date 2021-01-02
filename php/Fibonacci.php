<?php
function fibonacci($n): int
{
    if ($n < 2){
      return 1;
    }
    return fibonacci($n - 2) + fibonacci($n - 1);
}
$start = microtime(true);
fibonacci(22);
echo microtime(true) - $start;

