<?php
    include_once('classes/db.php');

    if($_POST['username'] && $_POST['password']){
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
                setcookie("SNID", $t, time()+60*60*24, '/', NULL, NULL, TRUE);
            }else{
                echo'password wrong';
            }
            
        }else{
            echo'netocno username';
        }
    }else{
        echo'nepostoji';
    }
?>

<html>
<form action="login.php" method="POST">
    <input type="text" name="username" placeholder="name" />
    <input type="text" name="password"/>
    <input type="submit"/>
</form>

</html>