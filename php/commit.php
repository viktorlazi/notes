<?php
    include_once('classes/db.php');

    if(!empty($_POST)){
        $t = $_POST['token'];
        $id = DB::tokenId($t);
        if($id != null){
            //print_r($_POST);
            $novi = $_POST['state'];
            //print_r($novi);
            
            DB::query(
                'UPDATE users 
                 SET state_json=:s 
                 WHERE id=:id',
                 array(':s'=>$novi, ':id'=>$id[0]['user_id'])
                );
            echo'radi';
            
        }
    }else{
        echo'ne radi';
    }
?>
