<?php
include 'config.php';
$data = file_get_contents("php://input");
$data = json_decode($data,true);
$name = $data['name'];
$address = $data['address'];
$phone = $data['phone'];
$dob = $data ['dob'];

mysqli_query($con,"INSERT INTO `students`(`name`, `phone`, `dob`, `address`) VALUES ('".$name."','".$phone."','".$dob."','".$address."')")or die(mysqli_error($con));