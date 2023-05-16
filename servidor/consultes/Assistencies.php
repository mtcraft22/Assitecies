<?php
    require("dadesconexio.php");
    if (!isset($_GET["extreure"])){
        $Extr=false;
    }else{
        $Extr=$_GET["extreure"];
    }
    if (!isset($_GET["data"])){
        $data=false;
    }else{
        $data=$_GET["data"];
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

    if (!isset($_GET['Data_inicial'])){
        $Datainicial=false;
    }else{
        $Datainicial=$_GET['Data_inicial'];
    }

    if (!isset($_GET["Data_final"])){
        $Datafinal=false;
    }else{
        $Datafinal=$_GET["Data_final"];
    }
    
    $dt="31/5/23";
    if($Datainicial){
        echo date('d/m/Y',strtotime($dt.'+1 days'));
    }

    $databaseConnection = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $hoy = date('d/m/Y');
    $agregarColumna = "ALTER TABLE `$Classe` ADD COLUMN IF NOT EXISTS `$hoy` VARCHAR(40) DEFAULT 'Ha vingut'";
    $sqlQuery = $databaseConnection->prepare($agregarColumna);
    $sqlQuery->execute();
    

    if ($Tipus){
        $agregarAssistencia = "UPDATE `$Classe` SET `$data` = '$Tipus' WHERE `Num` = '$Num'";
        $sqlQuery = $databaseConnection->prepare($agregarAssistencia);
        $sqlQuery->execute();
    }
    if($Extr){
        $Select = "SELECT * FROM $Classe ORDER BY 'Num' ";
        $sqlQuery = $databaseConnection->prepare($Select);
        $sqlQuery->execute();
        $taula=$sqlQuery->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($taula);
    }
    






?>