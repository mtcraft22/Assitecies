<?php
    require("dadesconexio.php"); 
    if (!isset($_GET["extreure"])){
        $extreureclasse=false;
    }else{
        $extreureclasse=$_GET["extreure"];
    }
    if (!isset($_GET["llista"])){
        $llistat=false;
    }else{
        $llistat=$_GET["llista"];
    }
    if (!isset($_GET["classe"])){
        $classe=false;
    }else{
        $classe=$_GET["classe"];
    }
    if (!isset($_GET["id"])){
        $id=false;
    }else{
        $id=$_GET["id"];

    }
    if(!isset($_GET["num"])){
        $num=false;
    }else{
        $num=$_GET["num"];

    }
    if(!isset($_GET["nom"])){
        $nom=false;
    }else{
        $nom=$_GET["nom"];

    }
    if(!isset($_GET["primer"])){
        $primer=false;
    }else{
        $primer=$_GET["primer"];

    }
    if(!isset($_GET["segon"])){
        $segon=false;
    }else{
        $segon=$_GET["segon"];

    }    
    try{
     
        //eliminem dades dels alumnes actuals eliminan els registre de la taula actual
        $databaseConnection = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        if ($llistat !=false and $classe !=false){
            $sql="DELETE FROM $classe WHERE 1";
            $resultat=$databaseConnection->prepare($sql);
            $resultat->execute();
            foreach($llistat as $alumne){
                $sql="INSERT INTO $classe (Num,Nom,Primer_Cognom,Segon_Cognom) values ('$alumne[0]','$alumne[1]','$alumne[2]','$alumne[3]')";
                $resultat=$databaseConnection->prepare($sql);
                $resultat->execute();
            }
        }elseif($extreureclasse){
            $sql="SELECT Num,Nom,Primer_Cognom,Segon_Cognom FROM $classe WHERE 1";
            $resultat=$databaseConnection->prepare($sql);
            $resultat->execute();
            $taula=$resultat->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($taula);
        }elseif($id !=false){
            $sql ="DELETE FROM $classe WHERE Num='$id' ";
            $resultat=$databaseConnection->prepare($sql);
            $resultat->execute();
            $sql="SELECT Num,Nom,Primer_Cognom,Segon_Cognom FROM $classe WHERE 1";
            $resultat=$databaseConnection->prepare($sql);
            $resultat->execute();
            $taula=$resultat->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($taula);
        }elseif($classe !=false and $segon!=false){        
            $sql="INSERT INTO $classe (Num,Nom,Primer_Cognom,Segon_Cognom) values ('$num','$nom','$primer','$segon')";
            $resultat=$databaseConnection->prepare($sql);
            $resultat->execute();
            $sql="SELECT Num,Nom,Primer_Cognom,Segon_Cognom FROM $classe WHERE 1";
            $resultat=$databaseConnection->prepare($sql);
            $resultat->execute();
            $taula=$resultat->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($taula); 
        }            
    }catch(PDOException $e){
        echo $e->getMessage();
    }
       

?>