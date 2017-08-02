<?php
include 'config.php';
$ara = array();
$result =  mysqli_query($con,"select * from students ORDER BY `id` DESC")or die(mysqli_error($con));
while($x = mysqli_fetch_assoc($result)){
    array_push($ara,$x);
}
//print_r($ara);
echo json_encode($ara);
?>