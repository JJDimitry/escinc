<?php
$id=$_POST['id'];

require 'conn.php';
mysqli_set_charset($conexion,"utf8");
$consulta = "DELETE FROM lusuario WHERE idusuario = '$id'";
$consulta2 = "DELETE FROM usuario WHERE ID = '$id'";

if($conexion->query($consulta)){	
    if($conexion->query($consulta2)){
        $resp = "nice";	
    }
    else{
	$resp= mysqli_error ($conexion);
    }
}
else{
$resp= mysqli_error ($conexion);
}
mysqli_close($conexion);
echo $resp;
?>