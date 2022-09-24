<?php

session_start();

$connection = mysqli_connect("localhost", "root", "", "cryptox");

if(isset($_POST['signupbtn']))
{
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];

    $number = preg_match('@[0-9]@', $password);

    if($password === $cpassword && strlen($password) >= 8 && $number) 
    {
        $query = "INSERT INTO signup(username, email, password) VALUES ('$username', '$email', '$password')";

        $query_run = mysqli_query($connection, $query);


        if($query_run)
        {
            $_SESSION['success'] = "Sign up successful";
            header("location: loginpage.php");
        }
        
        else{
            $_SESSION['status'] = "Sorry we could not sign you up, ";
            header("location: loginpage.php");
        }
    }

    else{
        echo "<script>
        alert('Passwords do not match. Please note passwords should be 8 characters with atleast one numeric character');
        </script>";
        header("location: loginpage.php");
    }
}


if(isset($_POST['signinbtn']))
{
    $email_login = $_POST['email'];
    $password_login = $_POST['password'];

    $query = "SELECT * FROM signup WHERE email='$email_login' AND password='$password_login'";
    $query_run = mysqli_query($connection, $query);

    if(mysqli_fetch_array($query_run))
    {
        $_SESSION['email'] = $email_login;
        header('Location: index.php');
    }
    else{
        $_SESSION['status'] = "Email ID or Password is invalid";
        header('Location: loginpage.php');
    }
}

?>