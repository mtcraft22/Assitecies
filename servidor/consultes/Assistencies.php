<?php
    require("dadesconexio.php");
    if (!isset($_GET["extreure"])){
        $Extr=false;
    }else{
        $Extr=$_GET["extreure"];
    }

    if (!isset($_GET["Tipus_Assistencia"])){
        $Tipus=false;
    }else{
        $Tipus=$_GET["Tipus_Assistencia"];
    }

    if (!isset($_GET['_Numero'])){
        $Num=false;
    }else{
        $Num=$_GET['_Numero'];
    }

    if (!isset($_GET["Classe"])){
        $Classe=false;
    }else{
        $Classe=$_GET["Classe"];
    }
    $databaseConnection = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $hoy = date('d/m/Y');
    $agregarColumna = "ALTER TABLE `$Classe` ADD COLUMN IF NOT EXISTS `$hoy` VARCHAR(40) DEFAULT 'Ha vingut'";
    $sqlQuery = $databaseConnection->prepare($agregarColumna);
    $sqlQuery->execute();
    

    if ($Tipus){
        $agregarAssistencia = "UPDATE `$Classe` SET `$hoy` = '$Tipus' WHERE `Num` = '$Num'";
        $sqlQuery = $databaseConnection->prepare($agregarAssistencia);
        $sqlQuery->execute();
    }elseif($Extr){
        $Select = "SELECT * FROM $Classe ORDER BY 'Num' ";
        $sqlQuery = $databaseConnection->prepare($Select);
        $sqlQuery->execute();
        $taula=$sqlQuery->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($taula);
    }
    






?>