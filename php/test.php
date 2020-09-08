<?php
    include_once('classes/db.php');

    $q=DB::query('SELECT * FROM users');

    echo $q[0]['password'];
?>