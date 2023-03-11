<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php'; 

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$newImg = $data->img;
$fName = $data->fName;
$lName = $data->lName;
$mailAddress = $data->mailAddress;
$contact = $data->contact;
$id = $data->id;


$sql = "UPDATE `receptionists` SET `profile_image`='$newImg',`name`='$fName',`surname`='$lName',`phone_number`='$contact',`email`='$mailAddress' WHERE id = '$id';";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Post was Updated");
}
?>

