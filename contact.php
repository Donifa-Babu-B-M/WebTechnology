<?php


$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "HMSUsers";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if ($conn->connect_error)
{
  die("Connection failed: " . $conn->connect_error);
}

$Name= $_POST['Name'];
$Email  = $_POST['Email'];
$Message = $_POST['Message'];



$sql = "INSERT INTO contact (Name,Email,Message )VALUES ('$Name','$Email','$Message')";



      
if(mysqli_query($conn, $sql)){
       
  echo "Your query received.Thanks!";
  include 'AfterRegister.html';
} 

else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  echo "Something went wrong.Resend your query";
}

 $conn->close();
 ?>