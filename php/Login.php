<?php
	$con = mysqli_connect("localhost", "start1a", "d8drNp4SEzM9tyE", "start1a");

	$userID = $_POST["userID"];
	$userPassword = $_POST["userPassword"];

	$statement = mysqli_prepare($con, "SELECT * FROM USER WHERE userID = ? AND userPassword = ?");
	mysqli_stmt_bind_param($statement, "ss", $userID, $userPassword);
	mysqli_stmt_execute($statement);

	// 결과를 클라이언트에 저장
	mysqli_stmt_store_result($statement);
	// 결과를 $userID에 바인딩함
	mysqli_stmt_bind_result($statement, $userID);

	$response = array();
    $response["success"] = false;

     while(mysqli_stmt_fetch($statement))
     {
       $response["success"] = true;
       $response["userID"] = $userID;
     }

     echo json_encode($response);
?>