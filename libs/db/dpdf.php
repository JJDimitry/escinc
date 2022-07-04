<?php
$id=$_POST['id'];

require 'conn.php';
mysqli_set_charset($conexion,"utf8");
$consulta = "DELETE FROM secd WHERE ID = $id";

if($conexion->query($consulta)){	
    $resp= 'Archivo borrado';	
}
else{
	$resp= mysqli_error ($conexion);
}
mysqli_close($conexion);

echo $resp;
?>