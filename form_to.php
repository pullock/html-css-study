<?php

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {



    $data["name"] = strip_tags($_POST["name"]);
    $data["tel"] = strip_tags($_POST["tel"]);
    $data["txt"] = '';
    $data["type"] = '';

    if (strip_tags($_POST["txt"]) != undefined and strip_tags($_POST["txt"]) != '') {
        $data["names"] = strip_tags($_POST["txt"]);
    } else {
        $data["names"] = 'без сообщения';
    }
    $data["to"] = '';
    $data["city"] = strip_tags($_POST["city"]);
     
     
    if ($data["tel"] != "") {

        require_once "./PHP/db.php";

        $host = "localhost";
        $user = "cheltemov_operat";
        $password = "nL5tz1tn";
        $base = "cheltemov_operat";

        $db = new Db($host, $user, $password, $base);
        $db->insert($data);

        echo 1;

    } else {
        echo 0;
    }


}

?>