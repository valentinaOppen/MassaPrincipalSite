<?php
var_dump("POST: ", $_POST);
$name = filter_var($_POST['Nombre'], FILTER_SANITIZE_STRING);
$place = filter_var($_POST['Lugar'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL);

var_dump($name, $place,$email);
// O Utilizar 
// $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);

if( ! $name || ! $place || ! $email){
    echo false;
    exit;
}

?>