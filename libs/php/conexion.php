<?php
 

$server="localhost";
$user="root";
$pass="";
$db="dbescinc";
$mysqli = new mysqli($server,$user,$pass, $db);


if($mysqli->connect_errno):
	echo "Error al conectar con MySQL debido al error".$mysqli->connect_error;
endif;
?>