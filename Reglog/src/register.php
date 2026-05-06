<?php
include 'db.php';
$data =
json_decode(file_get_contents("php://input"));
$name = data->name;
$email = data->email;
$password = data->password_hash($data->password, PASSWORD_DEFAULT);
$sql = "INSERT INTO users(name,email,password) VALUES ('$name','$email','$password')";

if (mysqli_query($conn,$sql)){
echo json_encode(["status" => "success"]);
}else{
    echo json_encode(["status" => "Error"]);
}
?>