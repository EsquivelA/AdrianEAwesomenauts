<?php
      /*
     * Puts evrything for config.php and login-verify.php on this page
     */
    require_once(__DIR__ . "/../model/config.php");
    
    $array = array(
        'exp'=> '',
        'exp1'=> '',
        'exp2'=> '',
        'exp3'=> '',
        'exp4'=> '',
    );
    
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
    $query = $_SESSION["connection"]->query("SELECT * FROM users WHERE username = '$username'");
    
    if($query->num_rows == 1) {
        $row = $query->fetch_array();
        
        /*
         * If the password and username is correcct echo Login Successful
         */
        if($row["password"] === crypt($password, $row["salt"])) {
            $_SESSION["authenticated"] = true;
            $array["exp"] = $row["exp"];
            $array["exp1"] = $row["exp"];
            $array["exp2"] = $row["exp"];
            $array["exp3"] = $row["exp"];
            $array["exp4"] = $row["exp"];
            $_SESSION["name"] = $username;
            echo json_encode($array);
        }
        else {
            echo "<p>Invalid username and password</p>";
        }
    }
    else {
        echo "<p>Invalid username and password</p>";
    }