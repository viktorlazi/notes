<?php
    include_once('classes/db.php');

    
    if($_POST['state']){
        $s = $_POST['state'];
        DB::dodajUser('nodf', 'dfdwf', "{$s}");
     
    }
?>

2