<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    exit;
}


include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");


$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name = $data->name;
$surname = $data->surname;
$age = $data->age;
$gender = $data->gender;
$contact = $data->contact;
$doctorId = $data->doctorId;
$specialisation = $data->specialisation;


if($message === ''){
    echo ("Message is Empty");
} else {

    $sql = "INSERT INTO `doctors` (`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `email`, `password`, `phone_number`, `doctor_id`, `specialisation`) VALUES (NULL, '', '$name', '$surname', '$age', '$gender', '', '', '$contact', '$doctorId', '$specialisation');";
    $result = mysqli_query($conn, $sql);
    
    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("All is Goood! Added Doctor");
    }

}

?>


<!-- // $image = $data->image;
$name = $data->name;
$surname = $data->surname;
$age = $data->age;
$gender = $data->gender;
// $password = $data->email;
$contact = $data->contact;
$doctorId = $data->doctorId;
$specialisation = $data->specialisation; -->


<!-- $sql = "INSERT INTO `doctors` (`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `email`, `password`, `phone_number`, `doctor_id`, `specialisation`) VALUES (NULL, '', '$name', '$surname', '$age', '$gender', '', '', '$contact', '$doctorId', '$specialisation');"; -->