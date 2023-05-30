<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alta de usuaris</title>
</head>
<body>
    <form action="" method="post">
    <label>Usuari:</label>
        <input type="text" name="usuari"><br>
        <label>Contrasenya:</label>
        <input type="password" name="contrasenya"><br>
        <select name="tipus">
            <option value="Mestre">Mestre</option>
            <option value="Administrador">Administrador</option>
            <option value="Secretari">Secretari</option>
        </select>
        <input type="submit" name="envia" value="Enregistrat">
    </form><br>
    <a href="./Assistenciesinici.php"><button>Dessa i  Torna al inici </button></a>
    <button ><a href="tanca.php">Tancar la sesió</a></button>
</body>
</html>
<?php
    
    require("../consultes/dadesconexio.php");
    session_start();
    if(!isset($_SESSION["usuari"])){
        header("location:../login/login.php"); 
    }elseif($_SESSION["tipus"]!="Administrador"){
        header("location:../permisos/denegat.php");
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $conexio = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $usu = htmlentities(addslashes($_POST["usuari"]));
        $contra = htmlentities(addslashes($_POST["contrasenya"]));
        $conencript=password_hash($contra,PASSWORD_DEFAULT);
        $tipususuari=htmlentities(addslashes($_POST["tipus"]));
        $consulta = "INSERT INTO USUARIS (USUARI,CONTRASENYA,TIPUSUSUARI) values ('$usu','$conencript','$tipususuari')";
        $resultat=$conexio->prepare($consulta);
        $resultat->execute();
    }
?> 

