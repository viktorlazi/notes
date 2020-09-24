<?php
    include_once('classes/db.php');

    if(!empty($_POST)){
        $u = $_POST['username'];
        $p = sha1($_POST['password']);
        
        if( 
            !DB::query(
                'SELECT username FROM users WHERE username=:username',
                array(':username'=>$u)
                )
        ){         
            
                $cstrong = True;
                $t = bin2hex(openssl_random_pseudo_bytes(64, $cstrong));
                
                DB::query(
                    'INSERT INTO users
                     VALUES (\'\', :usern, :passw, \'\')',
                    array(
                        ':usern' => $u,
                        ':passw' => $p
                    )
                );
                $user_id = DB::idByName($u);
                DB::query(
                    'INSERT INTO tokeni VALUES (\'\',:user_id,:token)',
                    array(
                        ':token'=>sha1($t),
                        ':user_id'=>$user_id
                    )
                );
                
                echo $t;          
                
            
        }else{
            echo'ime postoji';
        }
    }else{
        echo'greska';        
    }
?>
