<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    exit;
}

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$doctor = $data->doctor;
$name = $data->name;
$time= $data->time;
$date = $data->date;
$reason = $data->reason;


if($message === ''){
    echo ("Message is Empty");
} else {

    $sql = "INSERT INTO appointments(id, doctor_name, patient_name, time, date, reason_of_appointment) VALUES (NULL, '$doctor','$name','$time','$date','$reason');";
    $result = mysqli_query($conn, $sql);
    
    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("All is Goood! Added Post");
    }

}

?>
