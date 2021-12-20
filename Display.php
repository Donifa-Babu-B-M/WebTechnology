<?php
  
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "HMSUsers";

  
// Checking for connections
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if ($conn->connect_error)
{
  die("Connection failed: " . $conn->connect_error);
}
  
// SQL query to select data from database
$sql = "SELECT * FROM myuser ";
$result = $conn->query($sql);
$conn->close(); 
?>

<!DOCTYPE html>
<html lang="en">
  
<head>
    <meta charset="UTF-8">
    <title>Progress Details</title>
    <!-- CSS FOR STYLING THE PAGE -->
    <style>
        body{
            background-image: url("bk11.jpg");
            background-size: 1500px;
            background-repeat: no-repeat;
            margin:0px;
            }
        table {
            margin-left:450px;
            margin-top:40px;
            font-size: 25px;
            border: 3px solid black;
        }
  
        h1 {
            text-align: center;
            color: Grey;
            font-size:50px;
            font-family: 'Gill Sans', 'Gill Sans MT', 
            ' Calibri', 'Trebuchet MS', 'sans-serif';
            text-shadow: 2px 2px 1px Black,2px 2px 1px Black;
        }
  
        td {
            background-color: #E4F5D4;
            border: 2px solid black;
            
        }
  
        th,td {
            font-weight: bold;
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }
  
        td {
            font-weight: lighter;
        }
    </style>
</head>
 <div id="main"> 
<body>
    <section>
        <h1>YOUR PROGRESS</h1>
        <!-- TABLE CONSTRUCTION-->
        <table>
            <tr>
                <th>Activity</th>
                <th>Date Of Activity</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Time</th>
            </tr>
            <!-- PHP CODE TO FETCH DATA FROM ROWS-->
            <?php   // LOOP TILL END OF DATA 
                while($rows=$result->fetch_assoc())
                {
             ?>
            <tr>
                <!--FETCHING DATA FROM EACH 
                    ROW OF EVERY COLUMN-->
                <td><?php echo $rows['UActivity'];?></td>
                <td><?php echo $rows['UDOA'];?></td>
                <td><?php echo $rows['UHeight'];?></td>
                <td><?php echo $rows['UWeight'];?></td>
                <td><?php echo $rows['Time'];?></td>
                
            </tr>
            <?php
                }
             ?>
        </table>
    </section>
    
</body>
</div>  
</html>