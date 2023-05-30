<?php
require("../consultes/dadesconexio.php");
try{

    $conexio = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $usu = htmlentities(addslashes($_POST["usuari"]));
    $contra = htmlentities(addslashes($_POST["contrasenya"]));
    
    $consulta = "SELECT * FROM usuaris where USUARI='$usu'";
    $resultat=$conexio->prepare($consulta);
    $resultat->execute();

    if($resultat->rowCount()!=0){
        while($resultat=$resultat->fetch(PDO::FETCH_ASSOC)){
            if (password_verify($contra,$resultat["CONTRASENYA"])){
                session_start();
                $_SESSION["usuari"]=$usu;
                $_SESSION["tipus"]=$resultat["TIPUSUSUARI"];
                header("location:../inici/Assistenciesinici.php"); 
            }   
        }
        
    }else{
        header("location:login.php"); 
    }


    
}catch(Exception $e){
    echo "[FATAL]: " .$e->getMessage();
}
?>