<?php
    /*
     * This puts evrything from config.php on this page
     */
    require_once(__DIR__ . "/../model/config.php");
    /*
     * This to  make sure the user is logged in or identified
     */
    function authenticateUser() {
        /*
         * If the session is not set it will return false for authentification
         */
        if(!isset ($_SESSION["authenticated"])) {
            return false;
        }
        else {
            /*
             * If the session authentification is not true it will return false
             */
            if($_SESSION["authenticated"] != true) {
                return false;
            }
            else {
                /*
                 * If everything above is true it will return true
                 */
                return true;
            }
        }
    }
