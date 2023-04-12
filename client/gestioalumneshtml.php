<?php
session_start();
if(!isset($_SESSION["usuari"])){
    header("location:../login/login.php"); 
}elseif($_SESSION["tipus"]=="Mestre"){
    header("location:../permisos/denegat.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrador d'alumnes</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

    <link rel="stylesheet" href="../estils/gestioalumne.css">
</head>
<body id="cuerpo">
    <h1>Eliminar/afexir alumnes</h1>
    <div id="manipular">
        <form action="" method="post">
            <label>Classe a manipular:</label>
            <select name="Classe" onchange="extreuretaula()" class="Classes"  required>
                <option value="I3A">I3A</option>
                <option value="I3B">I3B</option>
                <option value="I4A">I4A</option>
                <option value="I4B">I4B</option>
                <option value="I5A">I5B</option>
                <option value="I5B">I5A</option>
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
        </form>
        <button onclick="extreuretaula()">Manipula classe</button>
    </div>
    <div id="taula"></div>
    <h1>Donada l'alta a una classe</h1>
    <form action="" method="post">
        <label>Fitxer en format CSV: </label>
        <input type="file" name="Llistat" id="Llistat" required><br>
        <label>Classe a actualizar:</label>
        <select name="Classe" class="Classes"  required>
            <option value="I3A">I3A</option>
            <option value="I3B">I3B</option>
            <option value="I4A">I4A</option>
            <option value="I4B">I4B</option>
            <option value="I5A">I5B</option>
            <option value="I5B">I5A</option>
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
    </form>
    <div id="Antecio">
        <h1>Això substituirà tots els registres pels nous indicas en el fitcher , eliminara els actuals ¿Continuar?</h1>
        <button onclick="show('none')">No estic segur</button>
        <button onclick="previewFile()">Continuar</button>
    </div>
    <button onclick="show('block')">Actualiza</button>
    <p id="vamooss"></p>
    <script src="gestioalumnes.js"></script>
</body>
</html>