<?php

  require("dadesconexio.php");
  session_start();
    if(!isset($_SESSION["usuari"])){
        header("location:../login/login.php"); 
    }
  try {
    $opcionNumero = 0;
    $opcionAssistencia = 0;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $opcionAssistencia = $_POST["Tipus_Assistencia"];
    $opcionNumero = $_POST['_Numero'];
    }
   
    $opcionSeleccionada = $_GET["Classe"];
    
    $databaseConnection = new PDO('mysql:host='._HOST_NAME_.';dbname='._DATABASE_NAME_, _USER_NAME_, _DB_PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

    $hoy = date('d/m/Y');

    $agregarColumna = "ALTER TABLE `$opcionSeleccionada` ADD COLUMN IF NOT EXISTS `$hoy` VARCHAR(40) DEFAULT 'Ha vingut'";
    $sqlQuery = $databaseConnection->prepare($agregarColumna);
    $sqlQuery->execute();
       
    $agregarAssistencia = "UPDATE `$opcionSeleccionada` SET `$hoy` = '$opcionAssistencia' WHERE `Num` = '$opcionNumero'";
    $sqlQuery = $databaseConnection->prepare($agregarAssistencia);
    $sqlQuery->execute();

    $Select = "SELECT * FROM $opcionSeleccionada ORDER BY 'Num' ";
    $sqlQuery = $databaseConnection->prepare($Select);
    $sqlQuery->execute();

    


    echo "<head><link rel='stylesheet' href='../../estils/estilos.css'></head>";

    echo "<h2>Taula $opcionSeleccionada</h2>";

    echo "<table id='Tabla_Classe'>";
    $row= $sqlQuery->fetch(PDO::FETCH_ASSOC);
    foreach ($row as $key => $value) {
        echo "<th>$key</th>";
    }
    echo "<tr>";
    foreach ($row as $key => $value) {
        if($value == "RetardMati"){
            echo "<td class=RetardMati>$value</td>";
        }else{
            echo "<td>$value</td>";
        }
        
        
    }
    echo "</tr>";

    while ($row = $sqlQuery->fetch(PDO::FETCH_ASSOC)) {
        
        echo "<tr>";
        foreach ($row as $key => $value) {
            if($value == "RetardMati"){
               
                echo "<td class=RetardMati > $value </td>";
            }else{
                echo "<td>$value</td>";
            }
        }
        echo "</tr>";
    }
    echo "</table><br><br>";
    
    

} catch(PDOException $e) {
echo 'ERROR: ' . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body id="cuerpo">
   
    <form action="" method="post">

    <label for="Num">Número:</label>
        <input type="number" name="_Numero" id="_Numero" required><br><br>
    <label for="Tipus_Assistencia">Tipus d'Assistència:</label>
        <select name="Tipus_Assistencia" id="Tipus_Assistencia" required>
            <option class="RetardMati" value="RetardMati">Retard Matí</option>
            <option class="RetardMatiJustificat" value="RetardMatiJustificat">Retard Matí Justificat</option>
            <option class="RetardTardaJustificat" value="RetardTardaJustificat">Retard Tarda Justificat</option>
            <option class="AbsenciaMati" value="AbsenciaMati">Absència Matí</option>
            <option class="AbsenciaTarda" value="AbsenciaTarda">Absència Tarda</option>
            <option class="AbsenciaTotalJustificat" value="AbsenciaTotalJustificat">Absència Total Justificat</option>
            <option class="AbsenciaMatiJustificat" value="AbsenciaMatiJustificat">Absència Matí Justificat</option>
            <option class="AbsenciaTardaJustificat" value="AbsenciaTardaJustificat">Absència Tarda Justificat</option>
        </select><br><br>
        <label for="Classe"></label>
        <input  id="Boto_Envia"type="submit"  value="Envia"><br>
       
        
        <button ><a href="../login/tanca.php">Tancar la sesió</a></button>
    </form>

</body>
</html>