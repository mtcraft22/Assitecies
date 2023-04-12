<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Assistència d'alumnes</title>
    <link rel="stylesheet" href="http:../../estils/inici.css">
</head>

<body>
    <?php
        session_start();
        if(!isset($_SESSION["usuari"])){
            header("location:../login/login.php"); 
        }
    ?>
    <div class="panells">
    <fieldset id="info-usuari" class="costat">
        <legend id="dades">Dades enristrament</legend >

        <div  id="info-usuari2" class="costat2">
            <p>Bon dia <?php echo $_SESSION["usuari"] ?></p>
            <p>Te has enregistrat com <?php echo $_SESSION["tipus"] ?></p>
            <button ><a href="../login/tanca.php">Tancar la sesió</a></button>
        </div>
    </fieldset>
    
    </div>
    <div class="formulari">
    <p>Assistència d'alumnes</p>
    <form action="../consultes/Assistencies.php" method="post">

        <label for="Classe">Classe:</label>
        <select name="Classe" id="Classes" onchange="updatehref(this.value)" required>
            <option value="---"></option>
            <option value="I3A">I3A</option>
            <option value="I3B">I3B</option>
            <option value="I4A">I4A</option>
            <option value="I4B">I4B</option>
            <option value="I5A">I5A</option>
            <option value="I5B">I5B</option>
            <option value="1rA">1rA</option>
            <option value="1rB">1rB</option>
            <option value="2nA">2nA</option>
            <option value="2nB">2nB</option>
            <option value="3rA">3rA</option>
            <option value="3rB">3rB</option>
            <option value="4rA">4rA</option>
            <option value="4rB">4rB</option>
            <option value="4rC">4rC</option>
            <option value="5eA">5eA</option>
            <option value="5eB">5eB</option>
            <option value="6eA">6eA</option>
            <option value="6eB">6eB</option>
        </select><br><br>

        <label for="select">Enviar i veure la Taula:</label>
        
        <button><a id="enter">Mostra taula</a></button><br><br>
  
        <script>
            function updatehref(value){
                document.getElementById("enter").setAttribute("href",'http:../consultes/Assistencies.php?Classe='+value)
            }
        </script>
        
        
    </form></div>
    <?php 
        if ($_SESSION["tipus"]=="Administrador"){
            echo "<br><fieldset id='admin' class='costat'>
            <legend id='panell'>Panell d'aministració</legend>
            <div id='admin2' class='costat2'>
            <button ><a href='altausuaris.php'>Dona alta a nous usuaris</a></button><br>
            <button ><a href='../../client/gestioalumneshtml.php'>Dona alta a nous alumnes</a></button><br>
            <div>
            </fieldset>";
    
        }
    
    ?>
    
    
    
    
    
    
</body>

</html>