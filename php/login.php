<?php
    include_once('classes/db.php');
    header('Access-Control-Allow-Origin:*');

    if(!empty($_POST)){
        $u = $_POST['username'];
        $p = $_POST['password'];
        if(
            DB::query(
                'SELECT username FROM users WHERE username=:username',
                array(':username'=>$u)
            )
        ){
            if(
                DB::query(
                    'SELECT password FROM users WHERE username=:username',
                    array(':username'=>$u)
                )[0]['password'] == $p
            ){
                $cstrong = True;
                $t = bin2hex(openssl_random_pseudo_bytes(64, $cstrong));
                
                $user_id = DB::query(
                    'SELECT id FROM users WHERE username=:username',
                    array(':username'=>$u)
                )[0]['id'];
                
                DB::query(
                    'INSERT INTO tokeni VALUES (\'\',:user_id,:token)',
                    array(
                        ':token'=>sha1($t),
                        ':user_id'=>$user_id
                    )
                );
                
                echo $t;
                
                
            }else{
                //echo'password wrong';
                echo'netocne informacije';
            }
            
        }else{
            //echo'netocno username';
            echo'netocne informacije';
        }
    }else{
        echo'post nema informacija';
        
    }
?>
