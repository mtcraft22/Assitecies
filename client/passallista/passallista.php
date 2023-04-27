<?php
    session_start();
        if(!isset($_SESSION["usuari"])){
            header("location:../login/login.php"); 
        }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="stylesheet" href="./../../estils/gestioalumne.css">
    <title>Document</title>
</head>
<body>
    <div id="opcions">
        <p>RetardMati</p>
        <p>RetardMatiJustificat</p>    
        <p>RetardTardaJustificat</p>    
        <p>AbsenciaMati</p>    
        <p>AbsenciaTarda</p> 
        <p>AbsenciaTotalJustificat</p>
        <p>AbsenciaMatiJustificat</p>   
        <p>AbsenciaTardaJustificat</p>  
    </div>
    <div id="taulaalumnes">

    </div>
    <button ><a href="../login/tanca.php">Tancar la sesió</a></button>
    <script src="passallista.js"></script>
</body>
</html>