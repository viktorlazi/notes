<?php
    include_once('classes/db.php');

    $arr = DB::userById(20);
    echo $arr[0][3];

?>