<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>Assistència d'alumnes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="../../estils/inici.css">
</head>

<body>
    <?php
        session_start();
        if(!isset($_SESSION["usuari"])){
            header("location:../login/login.php"); 
        }
    ?>
    <div id="main" >
            <p>Bon dia <?php echo $_SESSION["usuari"] ?></p>
            <p>Te has enregistrat com <?php echo $_SESSION["tipus"] ?></p>
            <a id="enlace" href="../login/tanca.php">Tancar la sesió </a>
            
            <p>Assistència d'alumnes<p>
            <a id="enlace" href="./../../client/passallista/passallista.php">Passar LLista</a>
            <p>Informes</p>
            <a id='enlace' href='../../client/informe/informe.php'>Genera un Informe mensual</a><br>
       
    <?php 
        if ($_SESSION["tipus"]=="Administrador"){
            echo "<br>
           
                <p id='panell'>Panell d'aministració</p>
                <a id='enlace' href='../../client/altausuaris/gestiousuarishtml.php'>Dona alta a nous usuaris</a><br>
                <a id='enlace' href='../../client/gestioalumneshtml.php'>Dona alta a nous alumnes</a><br>
           ";
    
        }elseif($_SESSION["tipus"]=="Mestre"){
            header(("Location:../../../Assitecies/client/passallista/passallista.php"));
        }else{
            echo "<br>
           
                <p id='panell'>Panell d'aministració</p>
                <a id='enlace' href='../../client/gestioalumneshtml.php'>Dona alta a nous alumnes</a><br>
                
           ";
        }   
    
    ?>
    </div>
</body>
</html>