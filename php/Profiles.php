<?php
    $conn = mysqli_connect("localhost", "start1a", "d8drNp4SEzM9tyE", "start1a");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        
    }

    
    
    $userLevel = $_POST["userLevel"];
    $userExp = $_POST["userExp"];
    $userID = $_POST["userID"];

    $stmt = $conn->prepare("SELECT userID, userLevel, userExp  FROM USER WHERE userID = ?");
    $stmt->bind_param("s", $userID);
    $stmt->execute();

    $response = array();
    
    while($row = mysqli_fetch_array($stmt))
    {
        array_push($response, array("userLevel"=>$row[0], "userExp"=>$row[1]));
    }

    $stmt->close();

    echo json_encode(array("response"=>$response), JSON_UNESCAPED_UNICODE);

    $conn->close();
?>