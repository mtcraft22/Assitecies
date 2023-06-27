<?php
    ini_set("display_errors",1);
    error_reporting(1);

    require("biblioteca.php");

    

    //require_once 'vendor/autoload.php';

    require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require './vendor/phpmailer/phpmailer/src/SMTP.php';
    require './vendor/phpmailer/phpmailer/src/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // Instanciant un objecte de la classe PHPMailer
    $mail = new PHPMailer();
    // Activa debug --> https://phpmailer.github.io/PHPMailer/classes/PHPMailer-PHPMailer-SMTP.html
    $mail->SMTPDebug=0; // 0 - 4 -> Des de 0 que no fa debug fins al màxim debug amb el valor 4
    //SMTP
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Username = "15585221.clot@fje.edu"; // El teu compte de fje.edu
    $mail->Password = "405e2c21"; // El teu password del teu compte de fje.edu
    $mail->SMTPSecure = "PHPMailer::ENCRYPTION_STARTTLS";
    $mail->Port = 587;
    $mail->Host = "smtp.gmail.com";                          
    //Missatge
    $mail->SetFrom("15585221.clot@fje.edu","Joan Sanahuja Sole"); //El teu ccompte de fje.edu i el teu nom i cognoms
    $mail->addAddress("15587035.clot@fje.edu","Guillem Corujo Garcia"); //El compte al qual s'envia el correu, i el nom i cognoms del receptor del correu
    $mail->Subject = "PDF de la taula alumnes enviat via fje.edu";
    $mail->isHTML(true);
    $mail->Body = "Taula d'alumnes";
    $archivo = "taula_alumnes.pdf";
    $mail->AddAttachment($archivo,$archivo);
    //Enviament i tractament errors
    try {
        if ($mail->send()) echo "Missatge enviat";
    }
    catch (Exception $e) {
        echo "Error d'enviament del missatge: " . $mail->ErrorInfo; //El missatge d'error depén del nivell de debug indicat a SMTPDebug
    }
    $mail->smtpClose();
    session_start();
	if (isset($_SESSION['usuari'])){
		if (fAutoritzacio($_SESSION['usuari'])) {
			header("refresh:5;url=taula_alumnes_admin.php");
		} else {
			header("refresh:5;url=taula_alumnes_basic.php");
		}
	}
    
?>

