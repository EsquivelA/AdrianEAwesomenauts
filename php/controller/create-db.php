<?php
    /*
     * Puts evrything for config.php and login-verify.php on this page
     */
    require_once(__DIR__ . "/../model/config.php");
    require_once(__DIR__ . "/../controller/login-verify.php");
    
    /*
     * Authenticates user
     */
    if(!authenticateUser()) {
        header("Location: " . $path . "index.php");
        die();
    }
    
    /*
     * Creaates the table for posts
     */
    $query = $_SESSION["connection"]->query("CREATE TABLE posts ("
            . "id int(11) NOT NULL AUTO_INCREMENT,"
            . "title varchar(255) NOT NULL,"
            . "post text NOT NULL,"
            . "PRIMARY KEY (id))");
    
    /*
     * If the post table is successfully created echo it out, and if didnt echo out there was an error
     */
    if($query) {
        echo "<p>Successfully created table: posts</p>";
    }
    else {
        echo "<p>" . $_SESSION["connection"]->error . "</p>";
    }
    
    /*
     * Creates a table for users
     */
    $query = $_SESSION["connection"]->query("CREATE TABLE users ("
            . "id int(11) NOT NULL AUTO_INCREMENT,"
            . "username varchar(30) NOT NULL,"
            . "email varchar(50) NOT NULL,"
            . "password char(128) NOT NULL,"
            . "salt char(128) NOT NULL,"
            . "PRIMARY KEY (id))");
    
    /*
     * If the users table is successfully created echo it out, and if didnt echo out there was an error
     */
    if($query) {
        echo "<p>Successfully created table: users</p>";
    }
    else {
        echo "<p>" .  $_SESSION["connection"]->error . "</p>";
    }