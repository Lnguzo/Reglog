<?php

//Show errors (for debugging)
error_reporting(E_ALL);
ini_set('display_errors', 1);

//CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

//Include DB
include 'db.php';

//Get JSON data
$data = json_decode(file_get_contents("php://input"));

//Check if data exists
if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit();
}

//Get values correctly
$name = $data->name;
$email = $data->email;

//Hash password correctly
$password = password_hash($data->password, PASSWORD_DEFAULT);

//SQL query
$sql = "INSERT INTO users (name, email, password) 
        VALUES ('$name', '$email', '$password')";

//Execute query
if (mysqli_query($conn, $sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => mysqli_error($conn) // 👈 helps debugging
    ]);
}

?>