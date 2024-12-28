<?php
$port = 3307;
$host="localhost";
$user="root";
$pass="";
$db="log";
$conn=new mysqli($host,$user,$pass,$db,$port);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>