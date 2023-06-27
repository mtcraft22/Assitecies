<?php
    require_once 'vendor/autoload.php';
    use Dompdf\Dompdf;

    class taula_alumnes {

        public function pdf() {
            $dompdf = new DOMPDF();
            $dompdf->set_paper("A4", "landscape");
            ob_start();
            include 'taula_alumnes_basic.php';
            $html_para_pdf = "<h1>hello world</h1>"
           
            $dompdf->load_html($html_para_pdf);
            $dompdf->render(); //este comando renderiza el PDF
            $output = $dompdf->output(); //extrae el contenido renderizado del PDF
            file_put_contents('taula_alumnes.pdf', $output);
            $dompdf->stream("taula_alumnes", array("Attachment" => 0));
        }
    }
    $nova_taula_alumnes = new taula_alumnes();
    $nova_taula_alumnes->pdf();
    header("refresh:0.1;url=taula_alumnes.pdf");
?>