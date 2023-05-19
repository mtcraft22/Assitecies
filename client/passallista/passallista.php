<?php
    session_start();
        if(!isset($_SESSION["usuari"])){
            header("location:../login/login.php"); 
        }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="stylesheet" href="./../../estils/passallista.css">
    <title>Document</title>
</head>
<body>
    <div id="opcions" onclick="">
        <p onclick="setinci('Festiu')">Festiu</p>
        <p onclick="setinci('Ha vingut')">Ha vingut</p>
        <p onclick="setinci('RetardMati')">RetardMati</p>
        <p onclick="setinci('RetardMatiJustificat')">RetardMatiJustificat</p>    
        <p onclick="setinci('RetardTardaJustificat')">RetardTardaJustificat</p>    
        <p onclick="setinci('AbsenciaMati')">AbsenciaMati</p>     
        <p onclick="setinci('AbsenciaTarda')">AbsenciaTarda</p> 
        <p onclick="setinci('AbsenciaTotalJustificat')">AbsenciaTotalJustificat</p>
        <p onclick="setinci('AbsenciaMatiJustificat')">AbsenciaMatiJustificat</p>   
        <p onclick="setinci('AbsenciaTardaJustificat')">AbsenciaTardaJustificat</p>  
    </div>
    <select id="Classes" required>
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
    <div id="taula-contenidor"></div>
    <script src="passallista.js"></script>
    <button onclick="peticio_lista()">Passa llista</button><br>
    <h1>Filtrar per data</h1>
    <label>Data inicial: </label><br>
    <input id="data-inici" type="date"><br>
    <label>Data final: </label><br>
    <input id="data-final" type="date"><br>
    <button onclick="procesa_data()">Filtra</button>
    <p style="height:20px"></p>
    <a href="../../servidor/inici/Assistenciesinici.php"><button>Desa y torma al inici</button></a>
    
</body>
</html>