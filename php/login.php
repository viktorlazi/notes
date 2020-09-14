<?php
    if($_POST['username'] && $_POST['password']){
        $u = $_POST['username'];
        $p = $_POST['password'];

        echo $u.' '.$p;
    }
?>