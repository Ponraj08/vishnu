<?php
session_start();
include("connect.php");

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Navbar Section -->
  <div class="navbar-container fixed-navbar">
    <nav class="navbar">
      <ul>
        <li><a href="indx.php" class="nav-link">Home</a></li>
        <li><a href="about.php" class="nav-link">About Us</a></li>
        <li><a href="category.php" class="nav-link">Category</a></li>
        <li><a href="profile.html" class="nav-link active">Profile</a></li>
      </ul>
    </nav>
    <div class="buttons-container">
       <a href="logout.php"><button class="signout-btn">Signout</button></a>
    </div>
  </div>
  </div>

  <!-- Profile Section -->
  <div class="profile-container">
    <header class="profile-header">
        <div class="profile-info">
          <img src="default-profile.jpg" alt="Profile Picture" class="profile-pic">
          <div class="profile-details">
          <div style=" padding:15%;">
    <p  style="font-size:50px; font-weight:400;">
     <?php 
     if(isset($_SESSION['email'])){
      $email=$_SESSION['email'];
      $query=mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
      while($row=mysqli_fetch_array($query)){
          echo $row['firstname'];
      }
     }
     ?>
    </p>

            <p>bio...</p>
          </div>
        </div>
      </header>
    
  <section class="profile-container">
    <div class="profile-header">
      <h1>Your Uploaded Artworks</h1>
    </div>

    <div class="uploaded-images-grid">
      <!-- Dynamically display uploaded images -->
      <img src="user-uploaded1.jpg" alt="Uploaded 1" class="uploaded-image">
      <img src="user-uploaded2.jpg" alt="Uploaded 2" class="uploaded-image">
      <img src="user-uploaded3.jpg" alt="Uploaded 3" class="uploaded-image">
      <img src="user-uploaded4.jpg" alt="Uploaded 4" class="uploaded-image">
    </div>
  </section>


  <script src="image-viewer.js"></script>
</body>



