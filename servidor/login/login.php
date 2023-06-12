<!DOCTYPE html>
<html lang="cat">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrament</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="../../estils/login2.css">
</head>
    <body>
        <div id="contenidor">
            <img class="mb-4" src="../../media/taborlog.png" alt="" width="784" height="211">
            <form action="validar.php" method="post">
                <h1 class="h3 mb-3 font-weight-normal">Enregistrament</h1>
                <label  class="sr-only">Usuari</label>
                <input name="usuari"  id="inputEmail" class="form-control" placeholder="Usuari" required="" autofocus="">
                <label for="inputPassword" class="sr-only">Contrasenya</label>
                <input name="contrasenya" type="password" id="inputPassword" class="form-control" placeholder="Contrasenya" required="">
                <button class="btn btn-lg btn-primary btn-block" type="submit">Enregistrat</button>
            </form>
        </div>
    </body>
</html>

