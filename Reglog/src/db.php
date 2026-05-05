<?php
$host = "localhost";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($host,$user,$password,$database);
// Check connection
if (!conn) {
    die("connection failed: " . mysqli_connect_error());
}
?>