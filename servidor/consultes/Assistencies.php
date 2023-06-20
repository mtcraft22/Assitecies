<?php
    require("dadesconexio.php");
    
    if (!isset($_GET["extreure"])){
        $Extr=false;
    }else{
        $Extr=$_GET["extreure"];
    }
    if (!isset($_GET["data"])){
        $datain=false;
    }else{
        $datain=$_GET["data"];
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
    $hoy = date('d_m_Y');
    $data=new DateTime($Datafinal);
    $databaseConnection = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $agregarColumna = "ALTER TABLE `$Classe` ADD COLUMN IF NOT EXISTS `$hoy` VARCHAR(40) DEFAULT 'Ha vingut'";
    $sqlQuery = $databaseConnection->prepare($agregarColumna);
    $sqlQuery->execute();
    function filtra($Datainicial,$Datafinal,$databaseConnection,$Classe){
        $dates_a_consultar=array("Num","Nom","Primer_Cognom","Segon_Cognom");
        $period = new DatePeriod(
            new DateTime($Datainicial),
            new DateInterval('P1D'),
            new DateTime($Datafinal)
        );
        $Select = "SELECT * FROM $Classe ORDER BY 'Num' ";
        $sqlQuery = $databaseConnection->prepare($Select);
        $sqlQuery->execute();
        $taula=$sqlQuery->fetchAll(PDO::FETCH_ASSOC);
        foreach($period as $data=>$valor){
            if(isset($taula[0][$valor->format("d_m_Y")])){
                array_push($dates_a_consultar,$valor->format("d_m_Y")) ;
            }
            
        }
        $dtf=new DateTime($Datafinal);

        if(isset($taula[0][$dtf->format("d_m_Y")])){
            array_push($dates_a_consultar,$dtf->format("d_m_Y"));
        }
        $strdates=implode(',',$dates_a_consultar);

        $Select = "SELECT $strdates FROM $Classe ORDER BY 'Num' ";
        $sqlQuery = $databaseConnection->prepare($Select);
        $sqlQuery->execute();
        $taula2=$sqlQuery->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($taula2);

    }
    if ($Tipus){
        if ($Tipus=="Festiu"){
            $agregarAssistencia = "UPDATE `$Classe` SET `$datain` = 'Festiu' WHERE 1";
            $sqlQuery = $databaseConnection->prepare($agregarAssistencia);
            $sqlQuery->execute();
          
        }
        else{
            $agregarAssistencia = "UPDATE `$Classe` SET `$datain` = '$Tipus' WHERE `Num` = '$Num'";
            $sqlQuery = $databaseConnection->prepare($agregarAssistencia);
            $sqlQuery->execute();
            
        }
        if($Datainicial && $Datafinal){
                filtra($Datainicial,$Datafinal,$databaseConnection,$Classe);
            }
        else{
            $Select = "SELECT `Num`,`Nom`,`Primer_Cognom`,`Segon_Cognom`,`$hoy` FROM $Classe ORDER BY 'Num' ";
            $sqlQuery = $databaseConnection->prepare($Select);
            $sqlQuery->execute();
            $taula=$sqlQuery->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($taula);
        }
    }
    if($Extr){
        if($Datainicial && $Datafinal){
            filtra($Datainicial,$Datafinal,$databaseConnection,$Classe);
        }else{
            $Select = "SELECT `Num`,`Nom`,`Primer_Cognom`,`Segon_Cognom`,`$hoy`  FROM $Classe ORDER BY 'Num' ";
            $sqlQuery = $databaseConnection->prepare($Select);
            $sqlQuery->execute();
            $taula=$sqlQuery->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($taula);
        }
    }
?>


