<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "HMSUsers";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$Uname= $_POST["Uname"];
$UAge= $_POST["UAge"];
$UGender= $_POST["UGender"];
$UBlood= $_POST["UBlood"];
$UHeight= $_POST["UHeight"];
$UWeight= $_POST["UWeight"];
$UPhone= $_POST["UPhone"];
$UActivity= $_POST["UActivity"];
$UDOA= $_POST["UDOA"];
$Time= $_POST["Time"];

$sql = "INSERT INTO myuser (Uname,UAge ,UGender ,UBlood ,UHeight ,UWeight ,UPhone,UActivity ,UDOA ,Time) VALUES ('$Uname','$UAge' ,'$UGender' ,'$UBlood' ,$UHeight ,$UWeight ,$UPhone,'$UActivity' ,'$UDOA','$Time')";


if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


$conn->close();
?>