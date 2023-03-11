<?php

    include 'db_connection.php';

    header('Access-Control-Origin: *');
    header('Access-Control-Headers: *');

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body); // true makes associative array

    // $email = $data->activeUser;

    if($email === ""){
        echo "";
    } else {
        $sql = "SELECT * FROM receptionists;";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);
    
        if($resultCheck > 0){
    
            $emparray = array();
    
            while($row = mysqli_fetch_assoc($result)){
                $emparray[] = $row;
            }
    
            echo json_encode($emparray);
    
    
        } else {
            echo "Error Echo from PHP";
        }
    }

?>