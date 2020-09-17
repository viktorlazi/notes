<?php

    include_once('classes/db.php');

    if(isset($_POST['username']) && isset($_POST['password'])){
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
                echo'Logged in!';

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
                
                header('Content-Type: text/html; charset=utf-8');

                setcookie("SNID", $t, time()+60*60*24, '/', NULL, NULL, TRUE);
                echo $t;
                
                
            }else{
                echo'password wrong';
            }
            
        }else{
            echo'netocno username';
        }
    }else{
        echo'server nije dobia username i passw';
        
    }
?>
