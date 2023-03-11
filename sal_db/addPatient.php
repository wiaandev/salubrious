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
$email = $data->email;
$contact = $data->contact;
$patientId = $data->patientId;
$medicalNum = $data->medicalNum;


if($message === ''){
    echo ("Message is Empty");
} else {

    $sql = "INSERT INTO `patients`(`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `email`, `password`, `phone_number`, `patient_id`, `medical_aid_number`) VALUES (NULL,'','$name','$surname','$age','$gender','$email','','$contact','$patientId','$medicalNum');"; 
    $result = mysqli_query($conn, $sql);
    
    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("New Patient Added to Salubrious!");
    }

}

?>





<!-- $sql = "INSERT INTO `patients`(`id`, `profile_image`, `name`, `surname`, `age`, `gender`, `email`, `password`, `phone_number`, `patient_id`, `medical_aid_number`) VALUES (NULL,'','$name','$surname','$age','$gender','$email','','$contact','$patientId','$medicalNum');"; -->