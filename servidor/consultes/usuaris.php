<?php
    
    require("dadesconexio.php"); 
    if (!isset($_GET["extreure"])){
        $extreureclasse=false;
    }else{
        $extreureclasse=$_GET["extreure"];
    }
    if (!isset($_GET["Id"])){
        $Id=false;
    }else{
        $Id=$_GET["Id"];
    }
    if (!isset($_GET["Usuari"])){
        $Usuari=false;
    }else{
        $Usuari=$_GET["Usuari"];
    }
    if (!isset($_GET["Contrasenya"])){
        $Contra=false;
    }else{
        $Contra=$_GET["Contrasenya"];
    }
    if (!isset($_GET["Tipus"])){
        $Tipus=false;
    }else{
        $Tipus=$_GET["Tipus"];
    }

    $conexio = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    if($Id){
        $sql ="DELETE FROM `usuaris` WHERE `ID`='$Id' ";
        $resultat=$databaseConnection->prepare($sql);
        $resultat->execute();
    }

    if($extreureclasse){
        $sql= "SELECT * FROM `usuaris` WHERE 1";
        $resultat=$conexio->prepare($sql);
        $resultat->execute();
        $taula=$resultat->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($taula);
    }
   

?>

