<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
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
    <div class="cotainer-fluid">
        <div  id="info-usuari2" class="cotainer-fluid">
            <p>Bon dia <?php echo $_SESSION["usuari"] ?></p>
            <p>Te has enregistrat com <?php echo $_SESSION["tipus"] ?></p>
            <a href="../login/tanca.php"><button class="btn btn-primary" >Tancar la sesió </button></a>
        </div>
        <div class="cotainer-fluid">
            <legend>Assistència d'alumnes<legend>
            <a href="./../../client/passallista/passallista.php"><button class="btn btn-primary">Passar LLista</button></a>
        </div>
    <?php 
        if ($_SESSION["tipus"]=="Administrador"){
            echo "<br>
            <div id='admin' class='container-fluid'>
                <legend id='panell'>Panell d'aministració</legend>
                <button ><a href='../../client/altausuaris/gestiousuarishtml.php'>Dona alta a nous usuaris</a></button><br>
                <button ><a href='../../client/gestioalumneshtml.php'>Dona alta a nous alumnes</a></button><br>
            </div>";
    
        }elseif($_SESSION["tipus"]=="Mestre"){
            header(("Location:../../../Assitecies/client/passallista/passallista.php"));
        }else{
            echo "<br>
            <div id='admin' class='container-fluid'>
                <legend id='panell'>Panell d'aministració</legend>
                <button ><a href='../../client/gestioalumneshtml.php'>Dona alta a nous alumnes</a></button><br>
            </div>";
        }   
    
    ?>
    </div>
</body>
</html>