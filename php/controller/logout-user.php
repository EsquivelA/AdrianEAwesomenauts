<?php
     /*
     * This puts evrything from config.php on this page
     */
    require_once(__DIR__ . "/../model.config.php");
    
    /*
     * If the session is unset the session will die 
     */
    unset($_SESSION["authenticated"]);
    
    session_destroy();
    header("Location: " . $path . "index.php");
