<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    exit;
}

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");


$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$image = $data->image;
$name = $data->name;
$surname = $data->surname;
$age = $data->age;
$gender = $data->gender;
$contact = $data->contact;
$email = $data->email;
$password = $data->password;
// $rank = $data->rank;

$passwordEncrypt = md5($password);

list($type, $image) = explode(';', $image);
list(, $image)      = explode(',', $image);
$image = base64_decode($image);

$newPath = 'profiles/' . time() . '.jpg';

file_put_contents($newPath, $image);

$sql = "INSERT INTO `receptionists`(`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `phone_number`, `email`, `password`, `rank`) VALUES (NULL, '$newPath', '$name', '$surname', '$age', '$gender', '$contact', '$email', '$passwordEncrypt', 'Receptionist');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Added user");
}


?>

<!-- INSERT INTO `receptionists` (`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `phone_number`, `email`, `password`, `rank`) VALUES (NULL, '', '$name', '$surname', '$age', '$gender', '$contact', '$email', '$passwordEncrypt', 'Receptionist'); -->

