<?php
$idusuario=$_POST['idusuario'];
$dato=$_POST['dato'];
$npdf=$_POST['npdf'];
$base64=$_POST['base64'];

require 'conn.php';
mysqli_set_charset($conexion,"utf8");

$consulta = "INSERT INTO secd (idusuario, fecha, npdf, pdf)
             VALUES ('$idusuario', '$dato', '$npdf', '$base64')";

if($conexion->query($consulta)){
    $resp ='PDF Subido.';	
}
else{
	$resp=mysqli_error ($conexion);
}
mysqli_close($conexion);
echo $resp;
?>