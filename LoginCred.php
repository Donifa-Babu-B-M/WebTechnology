<?php 

session_start();



  $dbhost = "localhost";
  $dbuser = "root";
  $dbpass = "";
  $dbname = "HMSUsers";
  
  if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
  {
  
    die("failed to connect!");
  }

  function check_login($con)
  {
  
    if(isset($_SESSION['Username']))
    {
  
      $id = $_SESSION['user_id'];
      $query = "select * from cred where user_id = '$id' limit 1";
  
      $result = mysqli_query($con,$query);
      if($result && mysqli_num_rows($result) > 0)
      {
  
        $user_data = mysqli_fetch_assoc($result);
        return $user_data;
      }
    }
  
    //redirect to login
    header("Location: LoginCred.php");
    die;
  
  }
  
  function random_num($length)
  {
  
    $text = "";
    if($length < 5)
    {
      $length = 5;
    }
  
    $len = rand(4,$length);
  
    for ($i=0; $i < $len; $i++) { 
      # code...
  
      $text .= rand(0,9);
    }
  
    return $text;
  }  
	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$Username = $_POST['Username'];
		$Password = $_POST['Password'];

		if(!empty($Username) && !empty($Password) && !is_numeric($Username))
		{

			//read from database
			$query = "select * from cred where Username = '$Username' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					
					if($user_data['Password'] === $Password)
					{

						$_SESSION['Username'] = $user_data['Username'];
						header("Location: LoginCred.php");
           
						die;
					}
				}
        echo "Successfully Logged in!";
        include 'AfterLogin.html';
			}
			
		}else
		{
			echo "wrong username or password!";
		}

	}

?>