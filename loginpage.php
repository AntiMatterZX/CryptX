<?php

session_start();

?>


<!DOCTYPE html>
<html lang="en" class="animated fadeIn">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="loginstyles.css" />
  <link rel="stylesheet" href="css/animate.css" />
  <title>CryptoX Login</title>
</head>

<body>
  <div class="animated fadeIn"></div>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <form action="code.php" method="POST" class="sign-in-form">
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" name="email" placeholder="Username" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" name="signinbtn" value="Login" class="btn solid" />
          <div class="animated fadeIn"></div>
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
        <form action="code.php" method="POST" class="sign-up-form" method="post">
          <div class="animated fadeIn"></div>
          <h2 class="title">Sign up</h2>
          <?php

          if(isset($_SESSION['success']) && $_SESSION['success'] !='')
          {
            echo '<h2> '.$_SESSION['success'].' </h2>';
            unset($_SESSION['success']);
          }
        
          if(isset($_SESSION['status']) && $_SESSION['status'] !='')
          {
            echo '<h2 class="bg-info"> '.$_SESSION['status'].' </h2>';
            unset($_SESSION['status']);
          }
        
          ?>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <!-- <div class="animated fadeIn"></div> -->
            <input type="text" placeholder="Username" name="username"/>
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email" name="email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Password" name="password" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Confirm Password" name="cpassword" />
          </div>
          <input type="submit" name="signupbtn" class="btn" value="Sign up" />
          <p class="social-text">Or Sign up with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Join the Fastest Growing Crypto Trading Community Now!
          </p>
          <button class="btn transparent" id="sign-up-btn">
            Sign up
          </button>
        </div>
        <img src="img/log.png" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us ?</h3>
          <p>
            Login Now and resume trading Crypto with Us!
          </p>
          <button class="btn transparent" id="sign-in-btn">
            Sign in
          </button>
        </div>
        <img src="img/register.png" class="image" alt="" />
      </div>
    </div>
  </div>

  <script src="app.js"></script>
</body>

</html>