<?php

if(isset($_POST["name"]) || isset($_POST["email"])) {
$time="";
$date="";
if(isset($_POST['name'])){$time=$_POST['name']}
if(isset($_POST['email'])){$date=$_POST['email']}

echo $name."<br>";
echo $email;
}
?>