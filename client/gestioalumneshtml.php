<?php
session_start();
if(!isset($_SESSION["usuari"])){
    header("location:../login/login.php"); 
}elseif($_SESSION["tipus"]=="Mestre"){
    header("location:../permisos/denegat.php");
}else{
    header("location:./gestio.html");
}
?>

