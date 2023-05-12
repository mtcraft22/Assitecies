<?php
    session_start();
    if(!isset($_SESSION["usuari"])){
        header("location:../../servidor/login/tanca.php"); 
    }elseif($_SESSION["tipus"]!="Administrador"){
        header("location:../permisos/denegat.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administració de usuaris</title>
    <link rel="stylesheet" href="../../estils/usuaris.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="gestiousuaris.js"></script>
</head>
<body>
    <div id="taula-contenidor"></div>
    <a href="../../servidor/inici/Assistenciesinici.php"><button>Dessa i  Torna al inici </button></a>
    <a href="../../servidor/login/tanca.php"><button >Tancar la sesió</button></a>
</body>
</html>