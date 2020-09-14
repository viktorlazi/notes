<?php
    include_once('classes/db.php');

    $arr = DB::userById(1);

    header('Content-Type: application/json');
    echo (json_encode($arr[0][3]));
?>
