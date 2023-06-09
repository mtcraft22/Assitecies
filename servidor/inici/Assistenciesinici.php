<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Assistència d'alumnes</title>
    <!-- <link rel="stylesheet" href="http:../../estils/inici.css"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>

<body>
    <?php
        session_start();
        if(!isset($_SESSION["usuari"])){
            header("location:../login/login.php"); 
        }
    ?>
    <div class="container-fluid">
    <fieldset id="info-usuari" class="costat">
        <legend id="dades">Dades enristrament</legend >

        <div  id="info-usuari2" class="costat2">
            <p>Bon dia <?php echo $_SESSION["usuari"] ?></p>
            <p>Te has enregistrat com <?php echo $_SESSION["tipus"] ?></p>
            <button ><a href="../login/tanca.php">Tancar la sesió</a></button>
        </div>
    </fieldset>
    
    </div>
    <div class="container-fluid">
        <p>Assistència d'alumnes</p>
        <a href="./../../client/passallista/passallista.php"><button>Passar LLista</button></a>
    </div>
    <?php 
        if ($_SESSION["tipus"]=="Administrador"){
            echo "<br><fieldset id='admin' class='container-fluid'>
            <legend id='panell'>Panell d'aministració</legend>
            <div id='admin2' class='costat2'>
            <button ><a href='../../client/altausuaris/gestiousuarishtml.php'>Dona alta a nous usuaris</a></button><br>
            <button ><a href='../../client/gestioalumneshtml.php'>Dona alta a nous alumnes</a></button><br>
            <div>
            </fieldset>";
    
        }elseif($_SESSION["tipus"]=="mestre"){header(("Location:Assitecies/client/passallista/passallista.php"));}
    
    ?>
    <iframe src="../../client/passallista/passallista.php" title="pasallista" width="2000" height="1000">
    
    
    
    
    
</body>

</html>