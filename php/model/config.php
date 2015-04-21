<?php
    /*
     * This puts everything from database.php on this page 
     */
    require_once(__DIR__ . "/database.php");
    /*
     * Starts a session 
     */
    session_start();
    session_regenerate_id(true);
    
    /*
     * Path to the blog page 
     */
    $path = "/AdrianEAwesomenauts/php/";
    
    /*
     * Variables 
     */
    $host = "localhost";
    $username = "root";
    $password = "root";
    $database = "awesomenauts_db";
    
    /*
     * If the session connection is not set it will make a new connection
     */
    if(!isset($_SESSION["connection"])) {
        $connection = new Database($host, $username, $password, $database);
        $_SESSION["connection"] = $connection;
    }