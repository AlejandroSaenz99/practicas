<?php

printf("Abrir  archivo");

$archivo_url = fopen("el_quijote (1).txt","r");



$texto = "";



while ($fragmento = fgets($archivo_url)){

    $texto .= $fragmento;

}

 printf($texto);

 printf("<br> hacer algo")



 



?>

<script>console.log(process.uptime())</script>