<?php
include_once('pass.php');

class DB {
        private static function connect() {
                $info = new Info();
                $pdo = new PDO('mysql:host=127.0.0.1:3306;dbname=u670267326_notes;charset=utf8',$info->username(),$info->password());
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $pdo;
        }
        public static function query($query, $params = array()) {
                $statement = self::connect()->prepare($query);
                $statement->execute($params);

                if(explode(' ',$query)[0] == "SELECT"){
                    $data = $statement->fetchAll();
                    return $data;
                }
        }

        public static function dodajUser($nm, $ps, $js){
                $s = "INSERT INTO users (username, password, state)
                VALUES ('{$nm}','{$ps}','{$js}')";
                DB::query($s);
        }
}
