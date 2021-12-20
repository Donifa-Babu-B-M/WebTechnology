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
$DOB=$_POST['DOB'];
$Username = $_POST['Username'];
$Email  = $_POST['Email'];
$Password = $_POST['Password'];
$Retype_Password= $_POST['Retype_Password'];


$sql = "INSERT INTO cred (Name,DOB,Username,Email,Password,Retype_Password )VALUES ('$Name','$DOB','$Username','$Email','$Password','$Retype_Password')";



      
if(mysqli_query($conn, $sql)){
       
  echo "You have logged in as new user successfully";
  include 'AfterRegister.html';
} 

else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  echo "Something went wrong";
}

 $conn->close();
 ?>