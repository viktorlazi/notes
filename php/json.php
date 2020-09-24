<?php
    include_once('classes/db.php');

    if(!empty($_POST)){
        $t = $_POST['token'];
        $id = DB::tokenId($t);
        if($id != null){
            $arr = DB::userById($id[0]['user_id']);
            header('Content-Type: text');
            echo (json_encode($arr[0][3]));
        }
    }else{
        echo'krivo';
    }
?>
