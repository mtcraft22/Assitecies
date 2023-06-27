<?php
    require("dadesconexio.php");
    require_once '../../vendor/autoload.php';
    use Dompdf\Dompdf;
    if (!isset($_GET["Month"])){
        $Month=false;
    }else{
        $Month=$_GET["Month"];
    }
    if (!isset($_POST["Html"])){
        $Html=false;
    }else{
        $Html=$_POST["Html"];
    }
    if (!isset($_GET["Class"])){
        $Class=false;
    }else{
        $Class=$_GET["Class"];
    }
    $databaseConnection = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    
    if($Month){
        $dates_a_consultar=array("Num","Nom","Primer_Cognom","Segon_Cognom");
        $period = new DatePeriod(
            new DateTime("2023-".$Month."-1"),
            new DateInterval('P1D'),
            new DateTime("2023-".$Month."-31")
        );
        $Select = "SELECT * FROM $Class ORDER BY 'Num' ";
        $sqlQuery = $databaseConnection->prepare($Select);
        $sqlQuery->execute();
        $taula=$sqlQuery->fetchAll(PDO::FETCH_ASSOC);
        foreach($period as $data=>$valor){
            if(isset($taula[0][$valor->format("d_m_Y")])){
                array_push($dates_a_consultar,$valor->format("d_m_Y")) ;
                
            }
            
        }
        $dtf=new DateTime("2023-".$Month."-31");

        if(isset($taula[0][$dtf->format("d_m_Y")])){
            array_push($dates_a_consultar,$dtf->format("d_m_Y"));
        }
        $strdates=implode(',',$dates_a_consultar);
        
        $Select2 = "SELECT $strdates FROM $Class ORDER BY 'Num' ";
        $sqlQuery2 = $databaseConnection->prepare($Select2);
        $sqlQuery2->execute();
        $taula2=$sqlQuery2->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($taula2);
        
    }
    if ($Html){
        $dompdf=new Dompdf();
      
        $dompdf->loadHtml($Html,'utf-8');     
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();
        $bytes = file_put_contents("informe.pdf", $dompdf->output());
      
                
        
    }
    
     
?>
