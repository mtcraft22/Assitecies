<?php
/*
 *  var meses = {
    1: "Gen",
    2: "Feb",
    3: "Mar",
    4: "Abr",
    5: "Mai",
    6: "Jun",
    7: "Jul",
    8: "Ago",
    9: "Set",
    10: "Oct",
    11: "Nov",
    12: "Des"
};
*/
?>
<!DOCTYPE html>
    <html lang="en">
    <head>
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
        <link href="../../estils/informe.css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        <h1>Generar informes de assitencia</h1><br>
        <label>Mes a generar: </label><br>
        <select id="select-month">
            <option value="1">Gener</option>
            <option value="2">Febrer</option>
            <option value="3">Març</option>
            <option value="4">Abril</option>
            <option value="5">Maig</option>
            <option value="6">Juny</option>
            <option value="7">Juliol</option>
            <option value="8">Agost</option>
            <option value="9">Setembre</option>
            <option value="10">Octubre</option>
            <option value="11">Novembre</option>
            <option value="12">Desembre</option>
        </select><br>

        <label>Classe a generar: </label><br>
        <select id="select-class" required>
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
         </select><br>
         <button onclick="request_data()">Generar informe</button><br>
         <div>
             <div style="font-family: DejaVu Sans;" id="informe">
             
                    
                <p> 
                    Hv : Ha vingut <br>
                    F : Festiu <br>
                    R : Retard Mati/RetardTarda <br>
                    AT: Absencia Total <br> 
                    AP: AbsenciaMati/AbsenciaTarda <br>
                </p>
                       
             
            </div>
        </div>
         
        <a href="../../servidor/inici/Assistenciesinici.php">Dessa i  Torna al inici </a><br>
        <a href="../../servidor/login/tanca.php">Tancar la sesió</a>
        <script src="informe.js"></script>
    </body>
</html>
