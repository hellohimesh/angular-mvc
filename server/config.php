<?php
header('Access-Control-Allow-Origin: *');
;
header("Access-Control-Allow-Headers: X-Requested-With");
header('content-type: application/json; charset=utf-8');
ini_set('display_errors', 'On');
error_reporting(1);

$host = "localhost";
$username = "root";
$password = "";
$con = mysqli_connect($host,$username,$password,"test") or die ("Could not connect");
mysqli_set_charset($con,"utf8");
?>